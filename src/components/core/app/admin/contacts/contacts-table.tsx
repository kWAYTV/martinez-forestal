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
  Trash2,
  User
} from 'lucide-react';
import { useTransition } from 'react';
import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
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
import {
  deleteContact,
  updateContactPosition,
  updateContactStatus
} from '@/data-access/contacts';

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
        console.error('Error:', error);
        toast.error('Error al actualizar el estado');
      }
    });
  };

  const handlePositionChange = async (id: string, position: number) => {
    startTransition(async () => {
      try {
        await updateContactPosition(id, position);
        toast.success('Posición actualizada correctamente');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error al actualizar la posición');
      }
    });
  };

  const handleDelete = async (id: string) => {
    startTransition(async () => {
      try {
        await deleteContact(id);
        toast.success('Contacto eliminado correctamente');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error al eliminar el contacto');
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
                <span>Fecha</span>
              </div>
            </TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map(contact => (
            <TableRow key={contact.id}>
              <TableCell>{contact.position}</TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone || '-'}</TableCell>
              <TableCell className='max-w-[200px] truncate'>
                {contact.message}
              </TableCell>
              <TableCell>
                {format(contact.createdAt, 'dd/MM/yyyy HH:mm', {
                  locale: es
                })}
              </TableCell>
              <TableCell>
                <Select
                  defaultValue={contact.status}
                  onValueChange={value =>
                    handleStatusChange(contact.id, value as Status)
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
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='hover:text-destructive'
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Eliminar Contacto</AlertDialogTitle>
                      <AlertDialogDescription>
                        ¿Estás seguro de que deseas eliminar este contacto? Esta
                        acción no se puede deshacer.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(contact.id)}
                        disabled={isPending}
                        className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
                      >
                        Eliminar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
