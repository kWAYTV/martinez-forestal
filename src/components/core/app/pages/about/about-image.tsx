'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Card } from '@/components/ui/card';

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className='relative aspect-square overflow-hidden lg:aspect-auto lg:h-full'>
        <Image
          src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOValUeQ7F4ELHVJb2ZhqMsorzyet19cTACdfO'
          alt='Martinez Forestal team'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </Card>
    </motion.div>
  );
}
