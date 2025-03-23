import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET

export function middleware(req) {
    const token = req.cookies.get('authToken')?.value

    // If no token, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    try {
        // Verify token
        jwt.verify(token, SECRET_KEY)
        return NextResponse.next()
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

// Apply middleware to protect premium routes
export const config = {
    matcher: ['/premium/:path*'], // Protects /premium and subpages
}
