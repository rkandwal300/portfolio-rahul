import { LucideBot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 sm:gap-8 font-sans">
          <li className="text-muted-foreground hover:text-foreground">
            <Link to="/">home</Link>
          </li>
          <li className="text-muted-foreground hover:text-foreground">
            <Link to="/projects">projects</Link>
          </li>
          <li className="text-muted-foreground hover:text-foreground">
            <Link to="/blog">blog</Link>
          </li>
          <li className="text-muted-foreground hover:text-foreground">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <div className="flex gap-0 sm:gap-4">
          <Button variant={'ghost'} size={'sm'}>
            <LucideBot className="w-6 h-6 text-foreground" />
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
