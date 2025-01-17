'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='relative h-screen w-full'>
      <Image
        src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOVYBDrkQ7F4ELHVJb2ZhqMsorzyet19cTACdf'
        alt='Forest background'
        fill
        className='object-cover brightness-[0.35]'
        priority
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
        <div className='max-w-[800px] space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-balance text-4xl font-medium text-white sm:text-5xl md:text-6xl'
          >
            Martinez Forestal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mx-auto max-w-2xl text-pretty text-base text-gray-300 sm:text-lg'
          >
            Expertos en servicios forestales en Cuntis, Pontevedra. Miembros de
            FEARMAGA con más de 20 años de experiencia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='pt-4'
          >
            <Button
              asChild
              size='lg'
              className='bg-emerald-600 text-base hover:bg-emerald-700'
            >
              <a href='#contact'>Contactar</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
