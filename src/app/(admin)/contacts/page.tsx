import { type Metadata } from 'next';

import { ContactsTable } from '@/components/core/app/admin/contacts/contacts-table';
import { getContacts } from '@/data-access/contacts';

export const metadata: Metadata = {
  title: 'Contactos',
  description: 'Gestión de contactos y mensajes recibidos.'
};

export default async function ContactsPage() {
  const contacts = await getContacts();

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
