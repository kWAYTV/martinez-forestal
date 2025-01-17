import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import { Providers } from '@/components/core/providers/providers';
import { createMetadata } from '@/lib/metadata';
import { ViewTransitions } from 'next-view-transitions';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}

export const metadata = createMetadata({
  title: {
    default: 'Martínez Forestal',
    template: '%s | Martínez Forestal'
  },
  description: 'Expertos en compra y venta de madera desde hace generaciones.'
});
