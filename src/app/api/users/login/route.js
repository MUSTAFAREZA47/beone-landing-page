import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/dbConnect'
import { User } from '../../../../models/user.models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET

export async function POST(req) {
    try {
        await dbConnect() // Connect to the database

        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 },
            )
        }

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 },
            )
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 },
            )
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
            expiresIn: '1h',
        })

        // Set the token in a secure cookie
        const response = NextResponse.json(
            { message: 'Login successful' },
            { status: 200 },
        )

        response.headers.set(
            'Set-Cookie',
            `authToken=${token}; HttpOnly; Secure; Path=/; Max-Age=3600; SameSite=Strict`,
        )

        return response
    } catch (error) {
        console.error('Login Error:', error)
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
