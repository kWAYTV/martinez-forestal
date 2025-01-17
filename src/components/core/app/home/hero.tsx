'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='relative h-[75vh] w-full'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOVYBDrkQ7F4ELHVJb2ZhqMsorzyet19cTACdf'
          alt='Forest background'
          fill
          className='object-cover object-center blur-[2px] brightness-[0.35]'
          priority
          sizes='100vw'
          quality={90}
        />
      </div>

      <div className='relative mx-auto flex h-full max-w-screen-xl items-center px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mx-auto max-w-3xl space-y-8 text-center'
        >
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
              Martinez Forestal
            </h1>
            <p className='text-xl text-gray-200'>
              Expertos en servicios forestales y gestión sostenible del medio
              ambiente
            </p>
          </div>

          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <Button
              asChild
              size='lg'
              className='min-w-[200px] bg-emerald-600 hover:bg-emerald-700'
            >
              <Link href='/#services'>Explorar Servicios</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='min-w-[200px] border-white text-white hover:bg-white/10'
            >
              <Link href='/#contact'>Contactar</Link>
            </Button>
          </div>

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className='pt-8'
          >
            <Link
              href='/#about'
              className='inline-flex items-center gap-2 text-gray-200 hover:text-white'
            >
              <span>Descubre más</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
