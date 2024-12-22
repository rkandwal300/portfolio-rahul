import About from './About';
import Hero from './Hero';

export default function Home() {
  return (
    <main className="mt-8 flex flex-col gap-16 pb-16">
      <Hero />
      <About />
    </main>
  );
}
