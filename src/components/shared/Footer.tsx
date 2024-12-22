import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-32 sm:flex-row-reverse sm:justify-between ">
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
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>© 2024</span>
          <Link className="link" to="/">
            rahul.com
          </Link>{' '}
          |{' '}
          <Link className="link font-bold" to="/privacy">
            privacy?
          </Link>
        </p>
      </section>
    </footer>
  );
}
