import Image from 'next/image';
import budgetTracker from '@/public/expense-tracker-app.png';
import socialMedia from '@/public/blog-post.png';
import ecommerce from '@/public/e-commerce.png';

export default function Projects() {
  return (
    <section>
      <h1
        className='text-center text-3xl font-bold  tracking-wider mb-4'
        id='projects'>
        Projects
      </h1>

      <div>
        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'>
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
            <h1 className='text-6xl font-thin text-blue-100 '>Project 1</h1>
            <h2 className='text-xl pl-3 my-4'>Budget tracker app</h2>
            <p className='pl-3 text-lg font-light tracking-wider'>
              I've developed a user-friendly app that helps you track your daily
              expenses. It's built using React and MUI for a modern design. The
              app utilizes Axios and Tanstack for handling queries, Charts.js
              for interactive charts, and Formik with Yup for efficient form and
              input validation. On the backend, I've used Node.js and Express,
              along with JSON Web Tokens for authorization, bcrypt for secure
              password hashing, and MongoDB with Mongoose for the database. This
              ensures a seamless and secure experience for managing and
              analyzing your expense data.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'>
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
            <h1 className='text-6xl font-thin text-blue-100 '>Project 2</h1>
            <h2 className='text-xl pl-3 my-4'>E commerce</h2>
            <p className='pl-3 text-lg font-light tracking-wider'>
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
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1  sm:grid-cols-2 gap-5 p-5'>
          <div className='w-10/12 mx-auto min-h-64 max-h-72 overflow-hidden rounded-xl'>
            <a
              href='https://makepost.vercel.app'
              target='_blank'>
              <Image
                src={socialMedia}
                alt='Social Media App'
                placeholder='blur'
              />
            </a>
          </div>
          <div>
            <h1 className='text-6xl font-thin text-blue-100 '>Project 3</h1>
            <h2 className='text-xl pl-3 my-4'>Social Media App</h2>
            <p className='pl-3 text-lg font-light tracking-wider'>
              The app allows posting, liking, and exploring content. It
              leverages TANStack for seamless CRUD operations with optimistic
              updates. TypeScript ensures reliable development, while Tailwind
              CSS enhances the app's design. Authentication and authorization
              are handled securely with NextAuth. On the backend, Prisma with
              PostgreSQL provides efficient data storage. Enjoy a seamless
              experience with modern technologies, sleek design, and robust
              security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
