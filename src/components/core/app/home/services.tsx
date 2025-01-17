'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Gestión Forestal',
    description:
      'Planificación y ejecución de proyectos forestales, incluyendo plantaciones, podas y talas controladas.',
    features: [
      'Plantaciones forestales',
      'Podas y clareos',
      'Talas controladas',
      'Gestión sostenible'
    ]
  },
  {
    title: 'Servicios de Maquinaria',
    description:
      'Maquinaria especializada para todo tipo de trabajos forestales y movimientos de tierra.',
    features: [
      'Retroexcavadoras',
      'Procesadoras',
      'Autocargadores',
      'Tractores forestales'
    ]
  },
  {
    title: 'Trámites y Permisos',
    description:
      'Gestión integral de documentación y permisos necesarios para trabajos forestales.',
    features: [
      'Licencias de tala',
      'Permisos ambientales',
      'Certificaciones',
      'Asesoramiento legal'
    ]
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
        className='mx-auto max-w-3xl space-y-8 text-center'
      >
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Nuestros Servicios</h2>
          <p className='text-muted-foreground'>
            Soluciones profesionales para todas tus necesidades forestales
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <p className='text-muted-foreground'>{service.description}</p>
                  <ul className='space-y-2'>
                    {service.features.map((feature, i) => (
                      <li key={i} className='flex items-center gap-2'>
                        <span className='text-green-600'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='pt-8'
        >
          <Button asChild size='lg'>
            <Link href='/#contact'>Solicita Presupuesto</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
