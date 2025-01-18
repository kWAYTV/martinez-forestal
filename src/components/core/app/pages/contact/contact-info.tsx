'use client';

import {
  Building2,
  Copy,
  type LucideIcon,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

type ContactItemProps = {
  icon: LucideIcon;
  children: React.ReactNode;
};

function ContactItem({ icon: Icon, children }: ContactItemProps) {
  return (
    <div className='flex items-start gap-3'>
      <Icon className='mt-1 h-5 w-5 text-primary' />
      {children}
    </div>
  );
}

type CopyButtonProps = {
  text: string;
  copiedText: string | null;
  onCopy: (text: string) => void;
};

function CopyButton({ text, copiedText, onCopy }: CopyButtonProps) {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='h-6 w-6'
      onClick={() => onCopy(text)}
    >
      <Copy
        className={`h-3 w-3 ${
          copiedText === text ? 'text-primary' : 'text-muted-foreground'
        }`}
      />
    </Button>
  );
}

type PhoneItemProps = {
  number: string;
  copiedText: string | null;
  onCopy: (text: string) => void;
};

function PhoneItem({ number, copiedText, onCopy }: PhoneItemProps) {
  return (
    <div className='flex items-center gap-2'>
      <a
        href={`tel:+34${number}`}
        className='hover:text-primary hover:underline'
      >
        {number.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}
      </a>
      <CopyButton text={number} copiedText={copiedText} onCopy={onCopy} />
    </div>
  );
}

export function ContactInfo() {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) {
      toast.success('Copiado al portapapeles');
    }
  };

  const address = 'Furco nº 20 – Arcos de Furcos, Cuntis, Pontevedra 36677';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <Card>
        <CardContent className='pt-6'>
          <div className='flex flex-col gap-4'>
            <ContactItem icon={Building2}>
              <div>
                <p className='font-medium'>Forestal Martinez 2010, S.L.</p>
              </div>
            </ContactItem>

            <ContactItem icon={MapPin}>
              <div className='flex items-start gap-2'>
                <div>
                  <p>Furco nº 20 – Arcos de Furcos</p>
                  <p>Cuntis, Pontevedra 36677</p>
                </div>
                <CopyButton
                  text={address}
                  copiedText={copiedText}
                  onCopy={handleCopy}
                />
              </div>
            </ContactItem>

            <ContactItem icon={Phone}>
              <div className='flex flex-col gap-1'>
                <PhoneItem
                  number='610974248'
                  copiedText={copiedText}
                  onCopy={handleCopy}
                />
                <PhoneItem
                  number='605088392'
                  copiedText={copiedText}
                  onCopy={handleCopy}
                />
              </div>
            </ContactItem>

            <ContactItem icon={Mail}>
              <div className='flex items-center gap-2'>
                <a
                  href='mailto:forestalmartinezalmeida@gmail.com'
                  className='break-all hover:text-primary hover:underline'
                >
                  forestalmartinezalmeida@gmail.com
                </a>
                <CopyButton
                  text='forestalmartinezalmeida@gmail.com'
                  copiedText={copiedText}
                  onCopy={handleCopy}
                />
              </div>
            </ContactItem>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
