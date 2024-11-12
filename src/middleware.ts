import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');

    // Redirect to /auth if the token is missing for all /dashboard routes
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return NextResponse.next();
}

// Updated matcher pattern to match all routes under /dashboard including nested paths
export const config = {
    matcher: ['/dashboard', '/dashboard/(.*)'], // Matches /dashboard and any subpath
};
