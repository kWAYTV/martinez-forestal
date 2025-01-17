import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { toast } from 'sonner';

export const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Aceptar'
      enableDeclineButton={false}
      cookieName='martinez-forestal-cookie-consent'
      expires={365}
      style={{
        background: 'hsl(var(--card) / 0.8)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid hsl(var(--border))',
        padding: '1rem'
      }}
      containerClasses='fixed bottom-0 left-0 right-0 flex items-center justify-between max-w-6xl mx-auto p-4'
      contentClasses='text-sm text-muted-foreground flex-1'
      buttonClasses='inline-flex h-9 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))/90]'
      onAccept={() => {
        toast.success('Preferencias guardadas');
      }}
    >
      Este sitio solo utiliza cookies esenciales para la funcionalidad de inicio
      de sesión de administradores. Si no eres administrador, no se almacenarán
      cookies en tu dispositivo ya que no necesitas (ni deberías) iniciar
      sesión.
    </CookieConsent>
  );
};
