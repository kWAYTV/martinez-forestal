'use client';

import { PageHero } from '@/components/core/app/pages/shared/page-hero';
import { AboutFeatures } from '@/components/core/app/pages/about/about-features';
import { AboutImage } from '@/components/core/app/pages/about/about-image';

export function AboutPage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-5xl space-y-24'>
        <PageHero
          title='Nuestra Historia'
          description='Descubre quiénes somos y nuestra pasión por el sector forestal'
        />

        <div className='grid gap-12 lg:grid-cols-2'>
          <AboutImage />
          <AboutFeatures />
        </div>
      </div>
    </main>
  );
}
