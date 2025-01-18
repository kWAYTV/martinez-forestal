'use client';

import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import { authClient } from '@/auth/client';
import { ContactsTable } from '@/components/core/app/admin/contacts/contacts-table';
import { ContactsTableSkeleton } from '@/components/core/app/admin/contacts/contacts-table-skeleton';

export default function ContactsPage() {
  const { data: session } = authClient.useSession();

  if (!session || session.user.role !== 'admin') {
    redirect('/');
  }

  // If no session yet, don't render anything
  if (!session) return null;

  return (
    <main className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='text-3xl font-bold'>Contactos</h1>
          <p className='text-muted-foreground'>
            Gestiona los mensajes recibidos a través del formulario de contacto.
          </p>
        </div>

        <Suspense fallback={<ContactsTableSkeleton />}>
          <ContactsTable />
        </Suspense>
      </div>
    </main>
  );
}
