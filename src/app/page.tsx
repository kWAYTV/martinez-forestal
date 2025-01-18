'use client';

import {
  ArrowRight,
  Info,
  Phone,
  TreesIcon as Tree,
  Wrench
} from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className='container flex flex-col items-center justify-center gap-8 py-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl'
        style={{ aspectRatio: '21/9' }}
      >
        <Image
          src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOFs7Q3V9BJ5DILM9oFl3jHKda7R6tYEQ4gUWA'
          alt='Forest landscape'
          fill
          className='object-cover'
          priority
          quality={100}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
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
        transition={{ duration: 0.8, delay: 0.4 }}
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
