'use client';

import { motion } from 'motion/react';

import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className='w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Separator />
      <div className='mx-auto max-w-screen-2xl px-6'>
        <div className='flex h-16 items-center justify-center'>
          <p className='text-center text-sm text-muted-foreground'>
            © {currentYear} Martinez Forestal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
