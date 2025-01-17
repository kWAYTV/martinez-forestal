'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative h-screen w-full'>
      <Image
        src='/images/hero-bg.jpg'
        alt='Forest background'
        fill
        className='object-cover brightness-50'
        priority
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl'
        >
          Martinez Forestal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl'
        >
          Expertos en servicios forestales en Cuntis, Pontevedra. Miembros de
          FEARMAGA con más de 20 años de experiencia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href='#contact'
            className='rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-700'
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
