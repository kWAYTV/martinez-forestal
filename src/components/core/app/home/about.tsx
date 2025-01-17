'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id='about' className='container space-y-8 py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-5xl space-y-12'
      >
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold'>Nuestra Historia</h2>
          <p className='text-muted-foreground'>
            Descubre quiénes somos y nuestra pasión por el sector forestal
          </p>
        </div>

        <div className='grid gap-12 md:grid-cols-2'>
          <Card className='relative h-[400px] overflow-hidden'>
            <Image
              src='https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOValUeQ7F4ELHVJb2ZhqMsorzyet19cTACdfO'
              alt='Martinez Forestal team'
              fill
              className='object-cover'
            />
          </Card>

          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='space-y-4 rounded-lg border p-6'>
              <h3 className='text-xl font-semibold'>Empresa Familiar</h3>
              <p className='text-muted-foreground'>
                Con más de 20 años de experiencia en el sector forestal, somos
                una empresa familiar comprometida con la excelencia.
              </p>
            </div>

            <div className='space-y-4 rounded-lg border p-6'>
              <h3 className='text-xl font-semibold'>Compromiso Ambiental</h3>
              <p className='text-muted-foreground'>
                Miembros activos de FEARMAGA, trabajamos por la sostenibilidad y
                el cuidado del medio ambiente.
              </p>
            </div>

            <div className='space-y-4 rounded-lg border p-6'>
              <h3 className='text-xl font-semibold'>Ubicación</h3>
              <p className='text-muted-foreground'>
                Situados en Cuntis, Pontevedra, damos servicio a toda Galicia
                con profesionalidad y cercanía.
              </p>
            </div>

            <div className='space-y-4 rounded-lg border p-6'>
              <h3 className='text-xl font-semibold'>Experiencia</h3>
              <p className='text-muted-foreground'>
                Nuestro equipo altamente cualificado garantiza la máxima calidad
                en cada servicio.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
