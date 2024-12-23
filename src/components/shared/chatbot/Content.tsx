import { Bot } from 'lucide-react';
import { useState } from 'react';
import { useBotContext } from '../../../lib/bot.context';
import { systemMessage } from '../../../lib/data';
import { cn } from '../../../lib/utils';
import { Card } from '../../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import ChatForm, { ChatFormValues } from './ChatForm';
import ChatHistory from './ChatHistory';

export default function ChatBotContent() {
  const { showBot } = useBotContext();
  const [chatHistory, setChatHistory] = useState<ChatFormValues[]>([]);

  if (!showBot) return null;
  function handleUpdateChatHistory(apiResponseText: string) {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text != 'Thinking...'),
      { role: 'model', text: apiResponseText },
    ]);
  }

  async function generateBotResponse(history: ChatFormValues[]) {
    const updatedHistory = [systemMessage, ...history].map(
      ({ role, text }) => ({
        role,
        parts: [{ text }],
      })
    );

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: updatedHistory }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message ?? 'Network response was not ok');
      }

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      handleUpdateChatHistory(apiResponseText);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div
      className={cn(
        'bottom-10 fixed right-10 h-fit z-50',
        !showBot && 'hidden'
      )}
    >
      <Popover>
        <PopoverTrigger>
          <ChatBotContentTrigger />
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          sideOffset={0}
          className="w-80 rounded-b-none p-0"
        >
          <section className="flex flex-col gap-2 h-96 w-full">
            <div className="h-full max-h-80 overflow-y-auto">
              {chatHistory.length > 0 ? (
                <ChatHistory chats={chatHistory} />
              ) : (
                <ChatsPlaceholder />
              )}
            </div>
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
}
function ChatBotContentTrigger() {
  return (
    <Card className=" rounded-t-none hover:underline p-6 justify-between items-center w-80">
      <section className="flex w-full items-center justify-start gap-3">
        <div className="flex flex-col items-start">
          <p className="text-xs">Chat with</p>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-sm font-medium">Rahul Support</p>
          </div>
        </div>
      </section>
    </Card>
  );
}
function ChatsPlaceholder() {
  return (
    <div className="h-full overflow-y-auto p-3">
      <div className="flex flex-col gap-2 mt-16 w-full items-center justify-center">
        <Bot size={25} />
        <p className="font-medium">Send a message to start the chat!</p>
        <p className="text-center text-xs text-muted-foreground">
          You can ask the bot anything about me and it will help to find the
          relevant information!
        </p>
      </div>
    </div>
  );
}
