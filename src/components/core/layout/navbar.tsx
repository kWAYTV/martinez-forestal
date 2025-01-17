'use client';

import { TreesIcon as Tree } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import Link from 'next/link';
import * as React from 'react';

import AuthButtons from '@/components/core/app/auth/auth-buttons';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'Nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#contact', label: 'Contacto' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest: number) => {
      setIsScrolled(latest > 0);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className='mx-auto max-w-screen-2xl px-6'>
          <nav className='flex h-16 items-center justify-between'>
            <Link href='/' className='flex items-center space-x-2'>
              <motion.div
                className='flex items-center gap-2'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Tree className='h-5 w-5 text-foreground/80' />
                <span>Martinez Forestal</span>
              </motion.div>
            </Link>

            <div className='hidden items-center gap-6 md:flex'>
              {navLinks.map(link => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={link.href}
                    className='text-sm font-medium text-foreground/60 transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className='flex items-center gap-2'>
              <ModeToggle />
              <AuthButtons />
            </div>
          </nav>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          className='w-full'
        >
          <Separator className='bg-border/40' />
        </motion.div>
      </motion.header>
      <div className='h-16' />
    </>
  );
}
