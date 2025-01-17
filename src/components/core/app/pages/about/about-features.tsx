'use client';

import {
  Building2,
  type LucideIcon,
  MapPin,
  Shield,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

import { Card } from '@/components/ui/card';

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
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

export function AboutFeatures() {
  return (
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
            <h3 className='mt-4 text-xl font-semibold'>{feature.title}</h3>
            <p className='mt-2 text-muted-foreground'>{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
