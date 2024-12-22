import About from '../about/About';
import PostsList from '../blog/PostsList';
import ProjectList from '../project/ProjectList';
import Hero from './Hero';

export default function Home() {
  return (
    <main className="mt-8 flex flex-col gap-8 pb-16">
      <Hero />
      <About />
      <ProjectList length={2} />
      <PostsList length={2} />
    </main>
  );
}
