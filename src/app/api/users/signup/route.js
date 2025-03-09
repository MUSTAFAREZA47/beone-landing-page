import { NextResponse } from 'next/server'
import dbConnect from '../../../../lib/dbConnect'
import { User } from '../../../../models/user.models'
import bcrypt from 'bcryptjs'

export async function POST(req) {
    try {
        await dbConnect()
        // console.log("helloooooo")

        const body = await req.json()
        console.log('Received data:', body) // Debugging: log the request body

        const { name, email, password } = body

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 },
            )
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 },
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return NextResponse.json(
            {
                message: 'User created successfully',
                user: newUser,
            },
            { status: 201 },
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        )
    }
}
