'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const router = useRouter()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(e)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })
        console.log(res)

        if (res.ok) router.push('/login')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md bg-slate-800 shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block  text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg  focus:ring-2 bg-zinc-700 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block  text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-zinc-700  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block  text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Extra Links */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    )
}
