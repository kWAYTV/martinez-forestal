'use client';

import {
  ArrowUpDown,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export function ContactsTableSkeleton() {
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>
              <Button variant='ghost' size='sm' className='h-8 px-2' disabled>
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className='h-4 w-8' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-32' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-48' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-24' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-full max-w-[200px]' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-4 w-32' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-9 w-[130px]' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
