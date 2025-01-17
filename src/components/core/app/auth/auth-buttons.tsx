'use client';

import Link from 'next/link';

import { authClient } from '@/auth/client';
import SignoutButton from '@/components/core/app/auth/logout-button';
import { Button } from '@/components/ui/button';

export default function AuthButtons() {
  const { data: session } = authClient.useSession();

  return !session ? (
    <div className='flex items-center gap-2'>
      <Link href='/sign-in'>
        <Button variant='outline' size='sm'>
          Sign In
        </Button>
      </Link>
    </div>
  ) : (
    <SignoutButton />
  );
}
