import type { Metadata } from 'next';
import { Poppins, Rubik } from 'next/font/google';

import './globals.css';
import { siteConfig } from './page';

import { cn } from '@/utils';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
});
const rubik = Rubik({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdTaquiImam.vercel.app'),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  keywords: ['Moment'],
  authors: [
    {
      name: 'Moment',
      url: 'https://github.com/xun082',
    },
  ],
  creator: 'Moment',

  openGraph: {
    type: 'website',
    locale: 'en_US',

    title: siteConfig.name,
    description: siteConfig.description,

    siteName: siteConfig.name,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            'relative min-h-screen bg-transparent',
            'bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]',
            { 'bg-white': '#E6E7EB' },
          )}
        >
          <div className="absolute top-0 left-0 right-0 px-40 py-4 max-md:px-4">
            <Navbar />
          </div>

          <div className="flex min-h-screen items-center px-40 max-md:px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
