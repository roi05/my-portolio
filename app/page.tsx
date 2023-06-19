import Header from '@/components/Header';
import { lustria } from './layout';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <main className='lead container mx-auto'>
      <Header />
      <section className=' leading-6 mb-56'>
        <p className='font-semibold text-2xl tracking-widest mb-4'>
          hey, I'm a
        </p>
        <h1
          className={`text-6xl font-bold mb-4 tracking-wider ${lustria.className}`}>
          Full-Stack Web Developer
        </h1>
        <p className='sm:w-3/4 tracking-widest'>
          With a passion for building seamless web applications, I specialize in
          creating engaging user experiences by combining my expertise in
          front-end and back-end development. By utilizing modern technologies
          and frameworks, such as React, Node.js, and databases like MongoDB, I
          thrive in crafting intuitive interfaces and scalable server-side
          solutions. Let's collaborate to bring your ideas to life!
        </p>
      </section>
      <AboutMe />
    </main>
  );
}
