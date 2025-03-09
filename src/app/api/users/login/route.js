import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/dbConnect'
import {User} from '../../../../models/user.models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET


export async function POST(req) {
    try {
        await dbConnect() // Connect to the database
        
        const body = await req.json()
        // console.log('Received data:', body) // Debugging: log the request body

        const { email, password } = body

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 },
            )
        }

        // Find user by email
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 },
            )
        }

        // Compare password with hashed password in the database
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 },
            )
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
            expiresIn: '1h',
        })

        // Return success response with token
        return NextResponse.json(
            { message: 'Login successful', token },
            { status: 200 },
        )
    } catch (error) {
        console.error('Login Error:', error)
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        )
    }
}

