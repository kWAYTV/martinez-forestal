'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { createContact } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, type ContactFormValues } from '@/schemas/contact';

export function ContactPage() {
  return (
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-3xl space-y-24'>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-4xl font-bold sm:text-5xl'>
            Contacta con Nosotros
          </h1>
          <p className='mt-4 text-xl text-muted-foreground'>
            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos
            medios o envíanos un mensaje.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className='text-center'>Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await createContact(data);

      if (!result.success) {
        toast.error(result.error || 'Error al enviar el mensaje');
        return;
      }

      toast.success('Mensaje enviado correctamente');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <User className='h-4 w-4' />
                <span>Nombre</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span>Email</span>
              </FormLabel>
              <FormControl>
                <Input type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span>Teléfono</span>
              </FormLabel>
              <FormControl>
                <Input type='tel' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <MessageSquare className='h-4 w-4' />
                <span>Mensaje</span>
              </FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          <Send className='mr-2 h-4 w-4' />
          Enviar Mensaje
        </Button>
      </form>
    </Form>
  );
}
