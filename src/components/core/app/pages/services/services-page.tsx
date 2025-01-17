'use client';

import {
  Cog,
  FileCheck,
  type LucideIcon,
  Tractor,
  TreePine
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
  }[];
};

const services: Service[] = [
  {
    title: 'Gestión Forestal',
    description:
      'Planificación y ejecución de proyectos forestales, incluyendo plantaciones, podas y talas controladas.',
    icon: TreePine,
    features: [
      {
        title: 'Plantaciones',
        description:
          'Diseño y ejecución de plantaciones forestales sostenibles.'
      },
      {
        title: 'Podas',
        description: 'Mantenimiento y cuidado profesional del arbolado.'
      },
      {
        title: 'Talas',
        description: 'Talas controladas con máxima seguridad y eficiencia.'
      }
    ]
  },
  {
    title: 'Servicios de Maquinaria',
    description:
      'Maquinaria especializada para todo tipo de trabajos forestales y movimientos de tierra.',
    icon: Tractor,
    features: [
      {
        title: 'Procesadoras',
        description: 'Equipos de última generación para procesado de madera.'
      },
      {
        title: 'Retroexcavadoras',
        description: 'Movimientos de tierra y preparación de terrenos.'
      },
      {
        title: 'Autocargadores',
        description: 'Transporte eficiente de madera en el monte.'
      }
    ]
  },
  {
    title: 'Trámites y Permisos',
    description:
      'Gestión integral de documentación y permisos necesarios para trabajos forestales.',
    icon: FileCheck,
    features: [
      {
        title: 'Licencias',
        description: 'Tramitación de permisos de tala y actividades forestales.'
      },
      {
        title: 'Certificaciones',
        description: 'Gestión de certificaciones forestales y ambientales.'
      },
      {
        title: 'Asesoría',
        description: 'Consultoría especializada en normativa forestal.'
      }
    ]
  }
];

export function ServicesPage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-5xl space-y-24'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-4xl font-bold sm:text-5xl'>Nuestros Servicios</h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Soluciones profesionales para todas tus necesidades forestales
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid gap-12'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader className='space-y-4 md:space-y-6'>
                  <div className='flex items-center gap-4'>
                    <div className='rounded-lg bg-primary/10 p-2'>
                      <service.icon className='h-6 w-6 text-primary' />
                    </div>
                    <CardTitle className='text-2xl'>{service.title}</CardTitle>
                  </div>
                  <p className='text-muted-foreground'>{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + featureIndex * 0.1
                        }}
                        className='space-y-2'
                      >
                        <div className='flex items-center gap-2'>
                          <Cog className='h-4 w-4 text-primary' />
                          <h3 className='font-medium'>{feature.title}</h3>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center'
        >
          <Button asChild size='lg'>
            <Link href='/contact'>Solicitar Presupuesto</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
