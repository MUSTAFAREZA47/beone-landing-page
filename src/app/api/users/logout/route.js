import { NextResponse } from 'next/server'

export async function POST() {
    const response = NextResponse.json({ message: 'Logged out successfully' })

    // Remove the authToken by setting an expired cookie
    response.headers.set(
        'Set-Cookie',
        'authToken=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict',
    )

    return response
}
