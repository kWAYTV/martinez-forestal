import { type Metadata } from 'next';

import About from '@/components/core/app/home/about';
import Contact from '@/components/core/app/home/contact';
import Hero from '@/components/core/app/home/hero';
import Services from '@/components/core/app/home/services';

export const metadata: Metadata = {
  title: 'Martinez Forestal - Servicios Forestales en Cuntis',
  description:
    'Empresa especializada en servicios forestales, venta de leña, compra de madera y trabajos forestales en Cuntis, Pontevedra. Miembro de FEARMAGA.'
};

export default async function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
