import Header from '@/components/Header';
import { lustria } from '@/app/font';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className='lead container mx-auto'>
        <Header />
        <section className='leading-6 mb-64'>
          <p className='font-semibold text-2xl tracking-widest mb-4'>
            hey, I'm a
          </p>
          <h1
            className={`text-6xl font-extrabold mb-4 tracking-wider text-blue-200 ${lustria.className}`}>
            Full-Stack Web Developer
          </h1>
          <p className='sm:w-3/4 tracking-widest'>
            Crafting seamless web applications with passion. From intuitive
            interfaces to scalable server-side solutions, I bring your ideas to
            life using React, Node.js, MongoDB, and more. Let's collaborate for
            exceptional results!
          </p>
        </section>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
