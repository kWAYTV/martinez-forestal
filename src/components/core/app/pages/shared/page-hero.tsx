'use client';

import { motion } from 'motion/react';

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='text-center'
    >
      <h1 className='text-4xl font-bold sm:text-5xl'>{title}</h1>
      <p className='mt-4 text-xl text-muted-foreground'>{description}</p>
    </motion.div>
  );
}
