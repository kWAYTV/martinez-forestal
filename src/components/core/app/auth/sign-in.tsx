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
              'Unable to sign in. Please ensure you have admin access.'
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
            Admin Sign In
          </CardTitle>
          <CardDescription className='text-center text-muted-foreground'>
            This sign-in is restricted to administrators only.
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
              Sign in with GitHub
            </LoadingButton>
          </div>
          <p className='mt-4 text-center text-sm text-gray-500'>
            Only authorized administrators can access this area. If you&apos;re
            not an admin, refrain from signing in.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
