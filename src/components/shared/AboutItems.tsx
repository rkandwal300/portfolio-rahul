import { AvatarFallback } from '@radix-ui/react-avatar';
import { Globe } from 'lucide-react';
import { About } from '../../lib/types';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

export default function AboutItems({ data }: { readonly data: About }) {
  return (
    <li className="-translate-x-10 gap-4 p-5 flex justify-start items-start">
      <a href={data.link}>
        <Avatar className="h-11 w-11">
          <AvatarImage src={data.logo} alt={data.organization} />
          <AvatarFallback className="bg-muted-foreground grow flex items-center justify-center">
            {data.organization[0]}
          </AvatarFallback>
        </Avatar>
      </a>
      <div className="flex flex-col">
        <div className="flex flex-1 flex-col justify-start gap-1">
          <time className="text-xs text-muted-foreground">
            <span>{data.duration}</span>
          </time>
          <h2 className="font-semibold leading-none">{data.organization}</h2>
          <p>{data.role}</p>
          <ul className="ml-4 list-outside list-disc">
            {data.description.map((desc, index) => (
              <li
                className="prose pr-8 text-sm dark:prose-invert"
                key={'d' + index}
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {data?.badges?.map((badge, index) => (
            <Badge key={'b-' + index} className="flex gap-1 items-center">
              <Globe size={18} />
              <span>{badge}</span>
            </Badge>
          ))}
        </div>
      </div>
    </li>
  );
}
