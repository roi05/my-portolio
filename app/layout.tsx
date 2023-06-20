import './globals.css';
import { lato } from './font';
export const metadata = {
  title: 'My Portfolio',
  description:
    'Explore my collection of web development projects and software applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='scroll-smooth'>
      <body className={`${lato.className} bg-gray-900 text-white `}>
        {children}
      </body>
    </html>
  );
}
