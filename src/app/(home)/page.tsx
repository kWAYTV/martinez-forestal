'use client';

import {
  ArrowRight,
  Info,
  Phone,
  TreesIcon as Tree,
  Wrench
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center gap-12 py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <Tree className='mx-auto h-12 w-12' />
        <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
          Martinez Forestal
        </h1>
        <p className='mt-4 text-xl text-muted-foreground'>
          Expertos en servicios forestales y gestión sostenible del medio
          ambiente
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='grid w-full max-w-2xl gap-4 sm:grid-cols-2'
      >
        <Link href='/about' className='w-full'>
          <Button
            variant='outline'
            size='lg'
            className='group relative w-full overflow-hidden'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              <Info className='h-4 w-4' />
              Sobre Nosotros
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </span>
            <motion.div
              className='absolute inset-0 z-0 bg-primary/10'
              initial={false}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.4 }}
            />
          </Button>
        </Link>

        <Link href='/services' className='w-full'>
          <Button
            variant='outline'
            size='lg'
            className='group relative w-full overflow-hidden'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              <Wrench className='h-4 w-4' />
              Servicios
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </span>
            <motion.div
              className='absolute inset-0 z-0 bg-primary/10'
              initial={false}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.4 }}
            />
          </Button>
        </Link>

        <Link href='/contact' className='w-full sm:col-span-2'>
          <Button
            size='lg'
            className='group relative w-full overflow-hidden bg-primary'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              <Phone className='h-4 w-4' />
              Contactar
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </span>
            <motion.div
              className='absolute inset-0 z-0 bg-primary-foreground/10'
              initial={false}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.4 }}
            />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
