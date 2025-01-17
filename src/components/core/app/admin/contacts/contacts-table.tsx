'use client';

import { type Contact, type Status } from '@prisma/client';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  ArrowUpDown,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User
} from 'lucide-react';
import { useTransition } from 'react';
import { toast } from 'sonner';

import {
  updateContactPosition,
  updateContactStatus
} from '@/data-access/contacts';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

type ContactsTableProps = {
  contacts: Contact[];
};

export function ContactsTable({ contacts }: ContactsTableProps) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = async (id: string, status: Status) => {
    startTransition(async () => {
      try {
        await updateContactStatus(id, status);
        toast.success('Estado actualizado correctamente');
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : 'Error al actualizar el estado'
        );
        console.error('Error updating status:', error);
      }
    });
  };

  const handlePositionChange = async (id: string, position: number) => {
    startTransition(async () => {
      try {
        await updateContactPosition(id, position);
        toast.success('Posición actualizada correctamente');
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : 'Error al actualizar la posición'
        );
        console.error('Error updating position:', error);
      }
    });
  };

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>
              <Button
                variant='ghost'
                size='sm'
                className='h-8 px-2'
                onClick={() =>
                  contacts.forEach((contact, index) =>
                    handlePositionChange(contact.id, index)
                  )
                }
                disabled={isPending}
              >
                <ArrowUpDown className='h-4 w-4' />
                <span className='ml-2'>Orden</span>
              </Button>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <User className='h-4 w-4' />
                <span>Nombre</span>
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span>Email</span>
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span>Teléfono</span>
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <MessageSquare className='h-4 w-4' />
                <span>Mensaje</span>
              </div>
            </TableHead>
            <TableHead>
              <div className='flex items-center gap-2'>
                <Clock className='h-4 w-4' />
                <span>Estado</span>
              </div>
            </TableHead>
            <TableHead className='text-right'>Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map(contact => (
            <TableRow key={contact.id}>
              <TableCell>{contact.position + 1}</TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone || '-'}</TableCell>
              <TableCell className='max-w-md truncate'>
                {contact.message}
              </TableCell>
              <TableCell>
                <Select
                  value={contact.status}
                  onValueChange={(value: Status) =>
                    handleStatusChange(contact.id, value)
                  }
                  disabled={isPending}
                >
                  <SelectTrigger className='w-[130px]'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='PENDING'>Pendiente</SelectItem>
                    <SelectItem value='IN_PROGRESS'>En Proceso</SelectItem>
                    <SelectItem value='COMPLETED'>Completado</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className='text-right'>
                {format(contact.createdAt, "d 'de' MMMM, yyyy", {
                  locale: es
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
