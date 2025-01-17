'use server';

import { z } from 'zod';

import { prisma } from '@/lib/prisma';
import { contactFormSchema, ContactFormValues } from '@/schemas/contact';

export type ContactActionState = {
  error?: string | null;
  success?: boolean;
};

export async function createContact(
  data: ContactFormValues
): Promise<ContactActionState> {
  try {
    // Validate the input data
    const validatedData = contactFormSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        error: validatedData.error.message || 'Error al enviar el mensaje'
      };
    }

    // Create the contact in the database
    await prisma.contact.create({
      data: {
        name: validatedData.data.name,
        email: validatedData.data.email,
        phone: validatedData.data.phone || null,
        message: validatedData.data.message,
        status: 'PENDING'
      }
    });

    return {
      success: true
    };
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        error: 'Datos de contacto inválidos. Por favor, revisa los campos.'
      };
    }

    // Log unexpected errors but don't expose them to the client
    console.error('Error creating contact:', error);
    return {
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    };
  }
}
