'use client';

import { Link } from 'next-view-transitions';

import { authClient } from '@/auth/client';
import SignoutButton from '@/components/core/app/auth/logout-button';
import { Button } from '@/components/ui/button';

export default function AuthButtons() {
  const { data: session } = authClient.useSession();

  return !session ? (
    <div className='flex items-center gap-2'>
      <Link href='/sign-in'>
        <Button variant='outline' size='sm'>
          Admin
        </Button>
      </Link>
    </div>
  ) : (
    <div className='flex items-center gap-2'>
      {session.user.role === 'admin' && (
        <Link href='/contacts'>
          <Button variant='outline' size='sm'>
            Panel
          </Button>
        </Link>
      )}
      <SignoutButton />
    </div>
  );
}
