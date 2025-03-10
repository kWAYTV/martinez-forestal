'use client';

import { motion } from 'motion/react';

import { ContactForm } from '@/components/core/app/pages/contact/contact-form';
import { ContactInfo } from '@/components/core/app/pages/contact/contact-info';
import { PageHero } from '@/components/core/app/pages/shared/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactPage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-3xl space-y-24'>
        <PageHero
          title='Contacta con Nosotros'
          description='Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios o envíanos un mensaje.'
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-center'>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              O contáctanos directamente
            </span>
          </div>
        </div>

        <ContactInfo />
      </div>
    </main>
  );
}
