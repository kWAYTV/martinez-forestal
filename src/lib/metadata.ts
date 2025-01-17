import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://martinez-forestal.vercel.app',
      images:
        'https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOValUeQ7F4ELHVJb2ZhqMsorzyet19cTACdfO',
      siteName: 'martinez-forestal.vercel.app',
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@ogeperc',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images:
        'https://z5l0a09ijg.ufs.sh/f/s1hOVWQzX3uOValUeQ7F4ELHVJb2ZhqMsorzyet19cTACdfO',
      ...override.twitter
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL!}`);

export const githubUsername = 'kWAYTV';
export const githubProfileUrl = `https://github.com/${githubUsername}`;
export const githubRepoUrl = `https://github.com/${githubUsername}/martinez-forestal`;
