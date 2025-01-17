'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon' className='h-9 w-9'>
        <span className='sr-only'>Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      className='h-9 w-9'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme === 'dark' ? (
            <Sun className='h-4 w-4' aria-hidden='true' />
          ) : (
            <Moon className='h-4 w-4' aria-hidden='true' />
          )}
        </motion.div>
      </AnimatePresence>
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
