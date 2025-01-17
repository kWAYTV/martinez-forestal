'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'next-view-transitions';

import { ServiceCard } from '@/components/core/app/pages/services/service-card';
import { services } from '@/components/core/app/pages/services/services-data';
import { PageHero } from '@/components/core/app/pages/shared/page-hero';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
        >
          <Card className='overflow-hidden bg-primary/5 p-8'>
            <div className='flex flex-col items-center gap-6 text-center'>
              <h2 className='text-2xl font-semibold sm:text-3xl'>
                ¿Necesitas alguno de nuestros servicios?
              </h2>
              <p className='max-w-2xl text-muted-foreground'>
                Contáctanos para obtener un presupuesto personalizado. Nuestro
                equipo te asesorará sobre la mejor solución para tus
                necesidades.
              </p>
              <Button asChild size='lg' className='group'>
                <Link href='/contact' className='flex items-center gap-2'>
                  Solicitar Presupuesto
                  <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
