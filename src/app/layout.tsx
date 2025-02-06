import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {ThemeProvider} from '@/components/layout/ThemeProvider';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-secondary' });

export const metadata: Metadata = {
  title: 'Zephyr Matrix - Powering Tomorrow\'s Technology Today',
  description: 'Empowering businesses with innovative technology solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}` } suppressHydrationWarning >
      <body suppressHydrationWarning >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}