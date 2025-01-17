'use client';

import { Cog } from 'lucide-react';
import { motion } from 'motion/react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Service } from '@/components/core/app/pages/services/services-data';

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
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
  );
}
