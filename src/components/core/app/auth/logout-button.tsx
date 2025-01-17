'use client';

import { useTransitionRouter } from 'next-view-transitions';
import { useState } from 'react';

import { authClient } from '@/auth/client';
import LoadingButton from '@/components/ui/loading-button';
import { toast } from 'sonner';

export default function SignoutButton() {
  const router = useTransitionRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/sign-in');
            router.refresh();
          }
        }
      });
      toast.success('Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error al cerrar sesión');
    } finally {
      setPending(false);
    }
  };

  return (
    <LoadingButton
      pending={pending}
      onClick={handleSignOut}
      size='sm'
      variant='destructive'
    >
      Cerrar sesión
    </LoadingButton>
  );
}
