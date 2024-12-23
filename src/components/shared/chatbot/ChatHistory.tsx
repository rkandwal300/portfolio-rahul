import { Bot } from 'lucide-react';
import { FieldValues } from 'react-hook-form';
import { cn } from '../../../lib/utils';

export default function ChatHistory({ chats }: { chats: FieldValues[] }) {
  return (
    <ul className="overflow-auto p-2 py-4">
      {chats.map((chat, index) => (
        <li key={'c' + index}>
          <div
            className={cn(
              'mb-3 flex items-center',
              chat.role == 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <Bot
              size={15}
              className={cn('mr-2', chat.role == 'user' && 'hidden')}
            />
            <div
              className={cn(
                'flex rounded text-xs border p-2',
                chat.role == 'user'
                  ? 'bg-foreground text-background'
                  : 'text-foreground bg-background'
              )}
            >
              <p className="mt-3 first:mt-0">{chat.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
