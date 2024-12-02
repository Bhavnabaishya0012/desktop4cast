import { NextResponse } from 'next/server';

export function middleware(req) {
    // Log that middleware is being triggered
    console.log('Middleware triggered for:', req.nextUrl.pathname);

    // Log User-Agent for debugging device detection
    const userAgent = req.headers.get('user-agent') || '';
    console.log('User-Agent:', userAgent);

    // Detect if the user is on a mobile device
    const isMobile = /mobile|android|iphone|ipad|phone|blackberry|webos|opera mini|opera mobi|kindle|silk|windows phone/i.test(userAgent);
    console.log('Is Mobile:', isMobile);

    // Check if the requested path is `/events/top` and the device is mobile
    const url = req.nextUrl.pathname;
    if (url === '/events/top' && isMobile) {
        console.log('Redirecting mobile user...');
        return NextResponse.redirect('https://4cast-mobileversion.vercel.app/events/top', 307);
    }

    // Log that the desktop version is being served
    console.log('Serving desktop version...');
    return NextResponse.next();
}

// Configure the matcher to apply middleware only for the `/events/top` route
export const config = {
    matcher: ['/events/top'], // Middleware applies only to /events/top
};
