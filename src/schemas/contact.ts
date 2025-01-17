import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede tener más de 50 caracteres' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido' }),
  phone: z
    .string()
    .min(9, { message: 'El teléfono debe tener al menos 9 dígitos' })
    .max(15, { message: 'El teléfono no puede tener más de 15 dígitos' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
    .max(1000, { message: 'El mensaje no puede tener más de 1000 caracteres' })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
