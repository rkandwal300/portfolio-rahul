import { ArrowDownRight, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { buttonVariants } from '../../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../ui/tooltip';

export default function Hero() {
  return (
    <section className="mt-8 flex flex-col">
      <div className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-center">
        <img
          src="/rahul_pic.heif"
          alt="rahul smiling"
          fetchPriority="high"
          width={175}
          height={175}
          className="rounded-lg object-center object-contain shadow-md"
          style={{ color: 'transparent' }}
        />
        <div className="flex flex-col justify-start items-start">
          <h1 className="font-calistoga text-5xl">hi rahul here 👋</h1>
          <p className="font-inter mt-4 font-light text-start">
            23-year-old <s>game</s> software developer from India{' '}
            <span className=" text-[10px] font-medium">IN</span>.
          </p>
          <p className="font-inter mt-2 font-light text-start">
            I like to develop full-stack, drink instant coffee and get coding
            advice from my dog,{' '}
            <a
              className="text-muted-foreground hover:text-foreground font-semibold"
              href="https://www.instagram.com/gomugomu.cat/"
              target="_blank"
              children=" Luffy."
            />
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p className="font-semibold">Ask the chatbot anything about me</p>

            <ArrowDownRight className="h-5 w-5 animate-up-down" />
          </div>
        </div>
      </div>
      <section className="mt-8 flex items-center gap-8">
        <a
          href="/resume.pdf"
          target="_blank"
          className={cn(
            buttonVariants({
              variant: 'outline',
              className: 'items-center gap-2 py-1',
            })
          )}
        >
          <span>Resume</span>

          <FileDown size={24} />
        </a>
        <div className="flex gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/rahul-kandwal-015910214/"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <Linkedin size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/rkandwal300"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <Github size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:rahulkandwal707@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Mail</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </section>
  );
}
