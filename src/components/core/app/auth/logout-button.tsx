'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { authClient } from '@/auth/client';
import LoadingButton from '@/components/ui/loading-button';

export default function SignoutButton() {
  const router = useRouter();
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
    } catch (error) {
      console.error('Error signing out:', error);
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
