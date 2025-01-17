import { Metadata } from 'next';

import Hero from '@/components/core/app/home/hero';
import About from '@/components/core/app/home/about';
import Services from '@/components/core/app/home/services';
import Contact from '@/components/core/app/home/contact';

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
