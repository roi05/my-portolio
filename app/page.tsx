import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <main className='lead container mx-auto'>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
