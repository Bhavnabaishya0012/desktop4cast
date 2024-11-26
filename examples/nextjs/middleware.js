import { NextResponse } from 'next/server';

export function middleware(req) {
    const userAgent = req.headers.get('user-agent') || '';
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

    if (isMobile) {
        // Redirect mobile users to the mobile version
        return NextResponse.redirect('https://4cast-mobileversion.vercel.app/events/top');
    }

    // Continue serving the desktop site for others
    return NextResponse.next();
}