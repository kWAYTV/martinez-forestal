'use client';

import { type ErrorContext } from '@better-fetch/fetch';
import { GithubIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { authClient } from '@/auth/client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import LoadingButton from '@/components/ui/loading-button';

export default function AdminSignIn() {
  const router = useRouter();
  const [pendingGithub, setPendingGithub] = useState(false);

  const handleSignInWithGithub = async () => {
    await authClient.signIn.social(
      {
        provider: 'github'
      },
      {
        onRequest: () => {
          setPendingGithub(true);
        },
        onSuccess: async () => {
          router.push('/');
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          toast.error(
            ctx.error.message ??
              'No se ha podido iniciar sesión. Asegúrate de tener acceso de administrador.'
          );
        }
      }
    );
    setPendingGithub(false);
  };

  return (
    <div className='flex grow items-center justify-center p-4'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-center text-3xl font-bold'>
            Iniciar sesión
          </CardTitle>
          <CardDescription className='text-center text-muted-foreground'>
            Esta sesión está restringida a administradores.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='mt-4'>
            <LoadingButton
              pending={pendingGithub}
              onClick={handleSignInWithGithub}
              className='w-full'
            >
              <GithubIcon className='mr-2 h-4 w-4' />
              Iniciar sesión con GitHub
            </LoadingButton>
          </div>
          <p className='mt-4 text-center text-sm text-gray-500'>
            Solo administradores autorizados pueden acceder a esta área. Si no
            es administrador, no inicies sesión.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
