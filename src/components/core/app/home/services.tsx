'use client';

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Venta de Leña',
    description:
      'Leña de calidad para calefacción, disponible en diferentes tamaños y tipos de madera.',
    icon: (
      <svg
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
        />
      </svg>
    )
  },
  {
    title: 'Compra de Madera',
    description:
      'Compramos madera en pie o talada. Valoración justa y pago inmediato.',
    icon: (
      <svg
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  },
  {
    title: 'Trabajos Forestales',
    description:
      'Limpieza de montes, desbroce, podas y todo tipo de trabajos forestales.',
    icon: (
      <svg
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
        />
      </svg>
    )
  },
  {
    title: 'Asesoramiento',
    description:
      'Consultoría forestal profesional para la gestión óptima de sus terrenos.',
    icon: (
      <svg
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id='services' className='container space-y-8 py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center'
      >
        <h2 className='mb-12 text-3xl font-bold'>Nuestros Servicios</h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='h-full'
            >
              <Card className='flex h-full flex-col'>
                <CardHeader>
                  <div className='mb-4 flex justify-center text-foreground/80'>
                    {service.icon}
                  </div>
                  <CardTitle className='text-center'>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-center text-muted-foreground'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
