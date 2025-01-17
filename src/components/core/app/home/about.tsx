'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id='about' className='container space-y-8 py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='grid gap-12 md:grid-cols-2'
      >
        <Card className='relative h-[400px] overflow-hidden'>
          <Image
            src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOValUeQ7F4ELHVJb2ZhqMsorzyet19cTACdfO'
            alt='Martinez Forestal team'
            fill
            className='object-cover'
          />
        </Card>
        <Card>
          <CardContent className='flex h-full flex-col justify-center space-y-6 p-6'>
            <h2 className='text-3xl font-bold'>Nuestra Historia</h2>
            <p className='text-lg text-muted-foreground'>
              Con más de dos décadas de experiencia en el sector forestal,
              Martinez Forestal se ha convertido en un referente en Cuntis y
              alrededores. Nuestro compromiso con la calidad y la sostenibilidad
              nos ha permitido crecer y mantener la confianza de nuestros
              clientes.
            </p>
            <ul className='space-y-4'>
              {[
                'Miembros activos de FEARMAGA',
                'Equipo profesional cualificado',
                'Maquinaria especializada de última generación'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center text-muted-foreground'
                >
                  <svg
                    className='mr-2 h-6 w-6 text-foreground/80'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
