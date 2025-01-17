'use client';

import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';

import { Button } from '@/components/ui/button';

import { PageHero } from '@/components/core/app/pages/shared/page-hero';
import { ServiceCard } from '@/components/core/app/pages/services/service-card';
import { services } from '@/components/core/app/pages/services/services-data';

export function ServicesPage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-5xl space-y-24'>
        <PageHero
          title='Nuestros Servicios'
          description='Soluciones profesionales para todas tus necesidades forestales'
        />

        <div className='grid gap-12'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

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
