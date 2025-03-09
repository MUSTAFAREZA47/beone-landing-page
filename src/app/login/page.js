'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    const router = useRouter()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })

        const data = await res.json()
        if (res.ok) {
            localStorage.setItem('token', data.token)
            router.push('/about')
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md bg-slate-800 shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Extra Links */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}
