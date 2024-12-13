import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/home/Navigation';

import './globals.css';

import { Suspense } from 'react';
import { Space_Mono } from 'next/font/google';

import GoogleAdScript from '@/components/ad/GoogleAdScript';
import SeoScript from '@/components/seo/SeoScript';

import Loading from './loading';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata = {
  title: 'digitalni-nastroje.cz',
  description: 'Digitální nástroje pro moderní web',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${spaceMono.variable} dark antialiased`}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body className='relative min-h-screen text-pretty bg-background font-mono text-foreground selection:bg-foreground selection:text-background'>
        <div className='relative flex min-h-screen flex-col'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Toaster
              position='top-center'
              toastOptions={{
                classNames: {
                  error: 'bg-destructive text-destructive-foreground font-bold',
                  success: 'bg-primary text-primary-foreground font-bold',
                  warning: 'bg-secondary text-secondary-foreground font-bold',
                  info: 'bg-muted text-muted-foreground font-bold',
                },
              }}
            />
            <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
              <div className='container'>
                <Navigation />
              </div>
            </header>
            <main className='container flex-1 py-6 md:py-8 lg:py-10'>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <footer className='border-t py-6 md:py-0'>
              <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
                <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
                  Built by{' '}
                  <a href='https://digitalni-nastroje.cz' className='font-medium underline underline-offset-4'>
                    digitalni-nastroje.cz
                  </a>
                </p>
              </div>
            </footer>
          </NextIntlClientProvider>
          <SeoScript />
          <GoogleAdScript />
        </div>
      </body>
    </html>
  );
}
