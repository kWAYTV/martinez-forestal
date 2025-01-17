'use server';

import { /* type Contact,  */ type Status } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import { prisma } from '@/lib/prisma';

export async function getContacts() {
  try {
    return await prisma.contact.findMany({
      orderBy: [{ position: 'asc' }, { createdAt: 'desc' }]
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw new Error('Error al obtener los contactos');
  }
}

export async function updateContactStatus(id: string, status: Status) {
  try {
    const contact = await prisma.contact.update({
      where: { id },
      data: { status }
    });

    revalidatePath('/contacts');
    return contact;
  } catch (error) {
    console.error('Error updating contact status:', error);
    throw new Error('Error al actualizar el estado del contacto');
  }
}

export async function updateContactPosition(id: string, position: number) {
  try {
    const contact = await prisma.contact.update({
      where: { id },
      data: { position }
    });

    revalidatePath('/contacts');
    return contact;
  } catch (error) {
    console.error('Error updating contact position:', error);
    throw new Error('Error al actualizar la posición del contacto');
  }
}
