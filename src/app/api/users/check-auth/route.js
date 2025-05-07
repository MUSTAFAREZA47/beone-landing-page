import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET

export async function GET(req) {
    try {
        const token = req.cookies.get('authToken')?.value

        if (!token) {
            return NextResponse.json(
                { message: 'Not authenticated' },
                { status: 401 }
            )
        }

        // Verify token
        jwt.verify(token, SECRET_KEY)
        return NextResponse.json(
            { message: 'Authenticated' },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Not authenticated' },
            { status: 401 }
        )
    }
} 