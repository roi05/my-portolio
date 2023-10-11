'use client';
import Image from 'next/image';
import budgetTracker from '@/public/expense-tracker-app.png';
import socialMedia from '@/public/socialmedia_app.png';
import ecommerceAdmin from '@/public/ecommerce-admin.png';
import ecommerceStore from '@/public/ecommerce-store.png';
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

  const [project4Ref, project4InView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (project1InView || project2InView || project3InView || project4InView) {
      setAnimationStarted(true);
    }
  }, [project1InView, project2InView, project3InView, project4InView]);

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
              href='https://e-commerce-admin-phi-nine.vercel.app'
              target='_blank'>
              <Image
                src={ecommerceAdmin}
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
            <h2 className='text-xl pl-3 my-4'>Ecommerce Dashboard</h2>
            <motion.p
              className='pl-3 text-lg font-light tracking-wider'
              initial='hidden'
              animate={project3InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Introducing our cutting-edge E-commerce Dashboard App, your
              ultimate store management solution. Seamlessly integrated with
              Stripe, it keeps you in the loop with instant notifications of
              successful user payments. But wait, there's more! Visualize your
              annual revenue with an interactive graph. We've harnessed the
              power of Next.js, MongoDB, Prisma, and NextUI for stunning UI
              components. Plus, our authentication is in expert hands with
              Clerk, ensuring a secure and seamless experience. Elevate your
              E-commerce game today.
            </motion.p>
          </div>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div
            className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'
            ref={project4Ref}>
            <a
              href='https://e-commerce-store-opal.vercel.app'
              target='_blank'>
              <Image
                src={ecommerceStore}
                alt='E commerce'
                placeholder='blur'
              />
            </a>
          </div>
          <div>
            <motion.h1
              className='text-6xl font-thin text-blue-100'
              initial='hidden'
              animate={project4InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Project 4
            </motion.h1>
            <h2 className='text-xl pl-3 my-4'>Ecommerce Store</h2>
            <motion.p
              className='pl-3 text-lg font-light tracking-wider'
              initial='hidden'
              animate={project4InView ? 'visible' : 'hidden'}
              variants={projectVariants}>
              Experience the perfect fusion of style and functionality with our
              integrated E-commerce Dashboard. Our platform empowers you to
              effortlessly deliver your products to eager users, while offering
              the convenience of real-time payments through Stripe. Powered by
              the dynamic duo of Next.js and Tailwind CSS for stunning
              aesthetics and powered by Zustand for seamless state management,
              we've crafted an exquisite app that's as beautiful as it is
              powerful. Elevate your E-commerce journey with us!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
