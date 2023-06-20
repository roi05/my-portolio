import { AiFillPhone, AiFillMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='bg-gray-950 py-8 min-h-14 mt-10 flex items-center justify-around flex-wrap'>
      <div className='flex items-center gap-2'>
        <p>
          <AiFillPhone size={'20px'} />
        </p>
        <p>+639458361557</p>
      </div>
      <div className='flex items-center gap-2'>
        <p>
          <AiFillMail size={'20px'} />
        </p>
        <a
          href='https://mail.google.com/mail/?view=cm&to=roibuenaventura05@gmail.com'
          className='hover:text-blue-200 '
          target='_blank'>
          roibuenaventura05@gmail.com
        </a>
      </div>
    </footer>
  );
}
