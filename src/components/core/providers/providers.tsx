'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { BackToTop } from '@/components/core/layout/back-to-top';
import { CookieConsentBanner } from '@/components/core/layout/cookie-consent';
import { Footer } from '@/components/core/layout/footer';
import { Navbar } from '@/components/core/layout/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <TooltipProvider>
          <Navbar />
          <main className='mx-auto flex w-full max-w-screen-xl flex-1 items-center justify-center px-4'>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <CookieConsentBanner />
        </TooltipProvider>
      </ThemeProvider>
      <Toaster richColors theme='system' />
    </>
  );
}
