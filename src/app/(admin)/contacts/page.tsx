'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import { authClient } from '@/auth/client';
import { ContactsTable } from '@/components/core/app/admin/contacts/contacts-table';
import { type Contact } from '@prisma/client';
import { getContacts } from '@/data-access/contacts';

export default function ContactsPage() {
  const { data: session } = authClient.useSession();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // If not logged in or not admin, redirect to home
    if (!session || session.user.role !== 'admin') {
      redirect('/');
    }
  }, [session]);

  useEffect(() => {
    async function fetchContacts() {
      if (session?.user.role === 'admin') {
        const data = await getContacts();
        setContacts(data);
      }
    }

    fetchContacts();
  }, [session?.user.role]);

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

        <ContactsTable contacts={contacts} />
      </div>
    </main>
  );
}
