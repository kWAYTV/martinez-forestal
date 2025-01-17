'use client';

import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pending?: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export default function LoadingButton({
  children,
  pending = false,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={pending}
      variant={variant}
      size={size}
      {...props}
    >
      {pending ? <Loader2 className='h-4 w-4 animate-spin' /> : children}
    </Button>
  );
}
