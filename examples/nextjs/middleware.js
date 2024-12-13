import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log('Middleware is running...');
    console.log('Middleware triggered for:', req.url);
    return NextResponse.next();
}