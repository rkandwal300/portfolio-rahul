import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonal, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../ui/button';
import { Form, FormField } from '../../ui/form';
import { Input } from '../../ui/input';

const chatSchema = z.object({
  role: z.enum(['user', 'model']).default('user'),
  text: z.string(),
});

export type ChatFormValues = z.infer<typeof chatSchema>;
export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}: {
  readonly chatHistory: ChatFormValues[];
  readonly setChatHistory: React.Dispatch<
    React.SetStateAction<ChatFormValues[]>
  >;
  readonly generateBotResponse: (Chats: ChatFormValues[]) => void;
}) {
  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: { role: 'user', text: '' },
  });

  function handleSubmit(data: ChatFormValues) {
    const message = data.text.trim();
    if (message.length < 1) return;
    setChatHistory((prev) => [...prev, { role: 'user', text: message }]);
    setTimeout(
      () =>
        setChatHistory((prev) => [
          ...prev,
          { role: 'model', text: 'Thinking...' },
        ]),
      600
    );

    generateBotResponse([
      ...chatHistory,
      { role: 'model', text: 'Thinking...' },
    ]);
    form.reset();
  }
  return (
    <Form {...form}>
      <form name="chatbot" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <div className="flex h-fit gap-1 px-2 py-3 border-t">
              <Button
                variant={'outline'}
                onClick={() => {
                  setChatHistory([]);
                }}
              >
                <Trash className="text-destructive" size={18} />
              </Button>
              <Input
                {...field}
                className="w-full"
                placeholder="Ask something..."
              />
              <Button
                disabled={field.value.trim().length < 1}
                type="submit"
                variant={'secondary'}
              >
                <SendHorizonal size={18} />
              </Button>
            </div>
          )}
        />
      </form>
    </Form>
  );
}
