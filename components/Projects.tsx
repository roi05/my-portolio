'use client';
import Image from 'next/image';
import budgetTracker from '@/public/expense-tracker-app.png';
import socialMedia from '@/public/socialmedia_app.png';
import ecommerce from '@/public/e-commerce.png';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [project1Ref, project1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [project2Ref, project2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [project3Ref, project3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (project1InView || project2InView || project3InView) {
      setAnimationStarted(true);
    }
  }, [project1InView, project2InView, project3InView]);

  const projectVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section>
      <motion.h1
        className='text-center text-3xl font-bold tracking-wider mb-4'
        id='projects'
        initial='hidden'
        animate={animationStarted ? 'visible' : 'hidden'}
        variants={projectVariants}>
        Projects
      </motion.h1>

      <div>
        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div
            className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden '
            ref={project1Ref}>
            <a
              href='https://socialsphere-three.vercel.app'
              target='_blank'>
              <Image
                src={socialMedia}
                alt='Social Media App'
                placeholder='blur'
                className='rounded-xl'
              />
            </a>
          </div>
          <div>
            <motion.h1
              className='text-6xl font-thin text-blue-100'
              initial='hidden'
              animate={project1InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Project 1
            </motion.h1>
            <h2 className='text-xl pl-3 my-4'>Social Media App</h2>
            <motion.p
              className='pl-3 text-lg font-light tracking-wider'
              initial='hidden'
              animate={project1InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              A friendly social media app that lets you connect with others in a
              whole new way. Share posts, leave comments, follow interesting
              people, and give likes to what you enjoy. You'll never miss a beat
              with notifications to keep you in the loop. Powered by modern
              technology like React, Next.js, and Tailwind CSS for the looks,
              and using Prisma and MySQL for the behind-the-scenes stuff. Rest
              easy knowing that the authentication keeps your journey through
              the app safe and sound.
            </motion.p>
          </div>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div
            className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'
            ref={project2Ref}>
            <a
              target='_blank'
              href='https://expense-tracker-app-aats.onrender.com'>
              <Image
                src={budgetTracker}
                alt='Budget Tracker App'
                placeholder='blur'
              />
            </a>
          </div>
          <div>
            <motion.h1
              className='text-6xl font-thin text-blue-100'
              initial='hidden'
              animate={project2InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Project 2
            </motion.h1>
            <h2 className='text-xl pl-3 my-4'>Budget tracker app</h2>
            <motion.p
              className='pl-3 text-lg font-light tracking-wider'
              initial='hidden'
              animate={project2InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              I've developed a user-friendly app that helps you track your daily
              expenses. It's built using React and MUI for a modern design. The
              app utilizes Axios and Tanstack for handling queries, Charts.js
              for interactive charts, and Formik with Yup for efficient form and
              input validation. On the backend, I've used Node.js and Express,
              along with JSON Web Tokens for authorization, bcrypt for secure
              password hashing, and MongoDB with Mongoose for the database. This
              ensures a seamless and secure experience for managing and
              analyzing your expense data.
            </motion.p>
          </div>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div
            className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'
            ref={project3Ref}>
            <a
              href='https://my-frist-e-commerce.vercel.app'
              target='_blank'>
              <Image
                src={ecommerce}
                alt='E commerce'
                placeholder='blur'
              />
            </a>
          </div>
          <div>
            <motion.h1
              className='text-6xl font-thin text-blue-100'
              initial='hidden'
              animate={project3InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Project 3
            </motion.h1>
            <h2 className='text-xl pl-3 my-4'>E commerce</h2>
            <motion.p
              className='pl-3 text-lg font-light tracking-wider'
              initial='hidden'
              animate={project3InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              In this example, I have utilized the latest update of Next.js, a
              popular framework for building React applications. To enhance type
              safety and catch potential errors, I have incorporated TypeScript,
              a statically-typed superset of JavaScript. For the design and
              styling, I have employed Tailwind CSS, a utility-first CSS
              framework that provides a wide range of pre-built components and
              styles. To efficiently manage data across the entire app, I have
              implemented React Context, which allows for easy sharing and
              access of data between components. This combination of
              technologies ensures a robust and well-designed application with
              enhanced type safety and seamless data management.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
