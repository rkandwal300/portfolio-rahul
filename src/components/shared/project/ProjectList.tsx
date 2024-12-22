import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../../lib/data';
import ProjectCard from './ProjectCard';

export default function ProjectList({ length }: { readonly length?: number }) {
  return (
    <section className="flex flex-col gap-8 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-calistoga">featured projects</h2>
        <Link
          to="/projects"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-light"
        >
          <span>view more</span>
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.slice(0, length ?? projects.length).map((project, index) => (
          <ProjectCard key={'P' + index} data={project} />
        ))}
      </div>
    </section>
  );
}
