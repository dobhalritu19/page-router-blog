import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    if (request.nextUrl.pathname.startsWith('/posts')) {
        // return NextResponse.redirect(new URL('/', request.url))
    }

    // return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/posts',
}