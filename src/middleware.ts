import { betterFetch } from '@better-fetch/fetch';
import { type NextRequest, NextResponse } from 'next/server';

import type { Session } from '@/auth/server';

const authRoutes = ['/sign-in'];
const adminRoutes = ['/contacts'];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isAdminRoute = adminRoutes.some(route => pathName.startsWith(route));

  const { data: session } = await betterFetch<Session>(
    '/api/auth/get-session',
    {
      baseURL: process.env.BETTER_AUTH_URL,
      headers: {
        cookie: request.headers.get('cookie') || ''
      }
    }
  );

  // Not authenticated
  if (!session) {
    if (isAuthRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Authenticated but trying to access auth routes
  if (isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Not admin trying to access admin routes
  if (isAdminRoute && session.user.role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
