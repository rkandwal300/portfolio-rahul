import About from './About';
import Hero from './Hero';
import PostsList from './PostsList';
import ProjectList from './ProjectList';

export default function Home() {
  return (
    <main className="mt-8 flex flex-col gap-16 pb-16">
      <Hero />
      <About />
      <ProjectList length={2} />
      <PostsList length={2} />
    </main>
  );
}
