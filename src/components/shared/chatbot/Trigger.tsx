import { LucideBot } from 'lucide-react';
import { useBotContext } from '../../../lib/bot.context';
import { Button } from '../../ui/button';

export default function ChatTrigger() {
  const { showBot, setShowBot } = useBotContext();
  return (
    <Button variant={'ghost'} size={'sm'} onClick={() => setShowBot(!showBot)}>
      {!showBot && (
        <div className="absolute border-destructive rotate-45 border w-6"></div>
      )}
      <LucideBot className="w-10 h-6 text-foreground" />
    </Button>
  );
}
