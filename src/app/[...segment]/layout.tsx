import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { Roboto, DM_Sans, Cormorant_Infant, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto'
})
const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm'
})
const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormo'
})
const jose = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jose'
})
export const metadata: Metadata = {
  title: 'YISA - Your Islamic Shariah Advisor ',
  description: 'Your Islamic Shariah Advisor (YISA)',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    segment: [locale: string, page: string, id: string],

  };
}
export default function RootLayout({
  children,
  params: { segment: [locale, page, id] },
}: Readonly<RootLayoutProps>) {

  return (
    <html lang={locale}>
      <link rel="icon" href="/next.svg" sizes="any" />
      <body className={`${roboto.className} ${dm.className} ${cormorant.style} ${jose.style}`}>
        <NextIntlClientProvider locale={locale}>

          <div className='flex flex-col min-h-screen'>
            <Header page={page} locale={locale ? locale : 'en'} />
            <div className='flex-grow mt-20'>{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
