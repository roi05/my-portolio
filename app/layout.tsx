import './globals.css';
import { Lato, Lustria } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
});

export const lustria = Lustria({
  subsets: ['latin'],
  weight: ['400'],
});

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
    <html lang='en'>
      <body className={`${lato.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
