import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../../lib/types';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../../ui/card';

export default function ProjectCard({ data }: { readonly data: Project }) {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-col space-y-1.5 p-6">
        <img
          src={data.image}
          alt={data.title}
          loading={'lazy'}
          decoding="async"
          className="h-40 w-full object-cover object-top"
          style={{
            backgroundColor: 'transparent',
          }}
        />
      </div>
      <CardHeader title={data.title} />
      <CardContent className="justify-between flex flex-col gap-4 items-center">
        <CardDescription>{data.description}</CardDescription>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {data.skills.map((skill, index) => (
            <Badge variant={'secondary'} key={'S' + index}>
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-start w-full gap-4">
          <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-foreground hover:bg-accent-foreground text-background text-[10px] font-semibold"
            >
              <Github size={10} /> <span>Source</span>
            </Button>
          </a>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-foreground hover:bg-accent-foreground text-background text-[10px] font-semibold"
            >
              <ExternalLink size={10} /> <span>Link</span>
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
