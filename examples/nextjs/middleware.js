import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.pathname;
    const userAgent = req.headers.get('user-agent') || '';

    console.log('Middleware triggered for URL:', url);
    console.log('User-Agent:', userAgent);

    const isMobile = /mobile|android|iphone|ipad|phone|blackberry|webos|opera mini|opera mobi|kindle|silk|windows phone/i.test(userAgent);
    console.log('Is Mobile:', isMobile);

    if (url === '/events/top' && isMobile) {
        console.log('Redirecting mobile user...');
        return NextResponse.redirect('https://4cast-mobileversion.vercel.app/events/top', 307);
    }

    console.log('Serving desktop version...');
    return NextResponse.next();
}

export const config = {
    matcher: '/events/top',
};