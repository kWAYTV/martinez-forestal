'use client';

import { type ErrorContext } from '@better-fetch/fetch';
import { GithubIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTransitionRouter } from 'next-view-transitions';
import { useState } from 'react';
import { toast } from 'sonner';

import { authClient } from '@/auth/client';
import { PageHero } from '@/components/core/app/pages/shared/page-hero';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import LoadingButton from '@/components/ui/loading-button';

export default function AdminSignIn() {
  const router = useTransitionRouter();
  const [pendingGithub, setPendingGithub] = useState(false);

  const handleSignInWithGithub = async () => {
    await authClient.signIn.social(
      {
        provider: 'github'
      },
      {
        onRequest: () => {
          setPendingGithub(true);
          toast.loading('Iniciando sesión...');
        },
        onSuccess: async () => {
          router.push('/');
          router.refresh();
          toast.success('Sesión iniciada correctamente');
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
    <main className='container relative flex flex-1 flex-col items-center justify-center py-24'>
      <div className='mx-auto max-w-3xl space-y-24'>
        <PageHero
          title='Área de Administración'
          description='Accede al panel de control para gestionar el contenido del sitio.'
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full'
        >
          <Card className='mx-auto max-w-md'>
            <CardHeader>
              <CardTitle className='text-center text-2xl'>
                Iniciar sesión
              </CardTitle>
              <CardDescription className='text-center'>
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
              <p className='mt-4 text-center text-sm text-muted-foreground'>
                Solo administradores autorizados pueden acceder a esta área. Si
                no es administrador, no inicies sesión.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
