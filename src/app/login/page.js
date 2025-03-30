'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link' // Corrected import

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || 'Login failed')
            }

            router.push('/premium')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-white text-center mb-4">
                        Login
                    </h2>

                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    {/* Signup Link */}
                    <p className="text-center text-gray-400 mt-4">
                        Don't have an account?{' '}
                        <Link
                            href="/signup"
                            className="text-blue-500 hover:underline"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}
