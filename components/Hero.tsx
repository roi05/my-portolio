'use client';
import { lustria } from '@/app/font';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const paragraphVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.section
      className='leading-6 mb-64'
      variants={containerVariants}
      initial='initial'
      animate='animate'>
      <p className='font-semibold text-2xl tracking-widest mb-4'>hey, I'm a</p>
      <motion.h1
        className={`text-7xl mb-4 tracking-wider text-blue-200 ${lustria.className}`}
        variants={titleVariants}
        initial='initial'
        animate='animate'>
        Full-Stack Web Developer
      </motion.h1>
      <motion.p
        className='sm:w-3/4 tracking-widest'
        variants={paragraphVariants}
        initial='initial'
        animate='animate'>
        Crafting seamless web applications with passion. From intuitive
        interfaces to scalable server-side solutions, I bring your ideas to life
        using React, Node.js, MongoDB, and more. Let's collaborate for
        exceptional results!
      </motion.p>
    </motion.section>
  );
}
