import { betterFetch } from '@better-fetch/fetch';
import { type NextRequest, NextResponse } from 'next/server';

import { type Session } from '@/auth/server';

const protectedRoutes = ['/contacts'];

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    '/api/auth/get-session',
    {
      baseURL: process.env.BETTER_AUTH_URL,
      headers: {
        cookie: request.headers.get('cookie') || ''
      }
    }
  );

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  // If it's not a protected route, allow access
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // If it's a protected route and there's no session, redirect to sign-in
  if (!session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
