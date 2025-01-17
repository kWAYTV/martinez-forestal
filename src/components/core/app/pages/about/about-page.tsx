'use client';

import { Building2, MapPin, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Empresa Familiar',
    description:
      'Con más de 20 años de experiencia en el sector forestal, somos una empresa familiar comprometida con la excelencia.',
    icon: Building2
  },
  {
    title: 'Compromiso Ambiental',
    description:
      'Miembros activos de FEARMAGA, trabajamos por la sostenibilidad y el cuidado del medio ambiente.',
    icon: Shield
  },
  {
    title: 'Ubicación',
    description:
      'Situados en Cuntis, Pontevedra, damos servicio a toda Galicia con profesionalidad y cercanía.',
    icon: MapPin
  },
  {
    title: 'Equipo Profesional',
    description:
      'Nuestro equipo altamente cualificado garantiza la máxima calidad en cada servicio.',
    icon: Users
  }
];

export function AboutPage() {
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
          <h1 className='text-4xl font-bold sm:text-5xl'>Nuestra Historia</h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Descubre quiénes somos y nuestra pasión por el sector forestal
          </p>
        </motion.div>

        {/* Image and Features Grid */}
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Image */}
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

          {/* Features Grid */}
          <div className='grid gap-6 sm:grid-cols-2'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.1
                }}
              >
                <Card className='h-full p-6'>
                  <feature.icon className='h-8 w-8 text-primary' />
                  <h3 className='mt-4 text-xl font-semibold'>
                    {feature.title}
                  </h3>
                  <p className='mt-2 text-muted-foreground'>
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
