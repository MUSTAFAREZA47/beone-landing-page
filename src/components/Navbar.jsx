'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/users/check-auth')
                if (response.ok) {
                    setIsLoggedIn(true)
                }
            } catch (error) {
                console.error('Auth check failed:', error)
            }
        }
        checkAuth()
    }, [])

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
            })
            if (response.ok) {
                setIsLoggedIn(false)
                router.push('/login')
            }
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <nav className="bg-zinc-900 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <img
                                className="h-8 w-auto"
                                src="/logo.png"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <ul className="flex gap-x-4 static w-auto bg-transparent flex-row backdrop-blur-lg">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 md:py-0 hover:text-gray-400 transition-colors duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 md:py-0 hover:text-gray-400 transition-colors duration-200"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block py-2 md:py-0 hover:text-gray-400 transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/testimonial"
                                    className="block py-2 md:py-0 hover:text-gray-400 transition-colors duration-200"
                                >
                                    Testimonial
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/our-policy"
                                    className="block py-2 md:py-0 hover:text-gray-400 transition-colors duration-200"
                                >
                                    Legal Policies
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-3">
                        {/* Telegram Button */}
                        <div className="hidden md:block">
                            <Link
                                href="https://t.me/+uZ9wUNy8TsIwY2I1"
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md px-4 py-2 hover:bg-white/10 transition-all duration-300"
                            >
                                Join Us
                            </Link>
                        </div>

                        {/* Login/Logout Button */}
                        <div className="hidden md:block">
                            {isLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col absolute top-20 right-0 bg-zinc-800 mr-4 px-8 py-6 rounded-3xl">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-2 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/testimonial"
                                className="block py-2 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonial
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/our-policy"
                                className="block py-2 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Legal Policies
                            </Link>
                        </li>
                        <li className="mt-4">
                            <Link
                                href="https://t.me/+uZ9wUNy8TsIwY2I1"
                                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-md px-4 py-2 hover:bg-white/10 transition-all duration-300"
                            >
                                Join Us
                            </Link>
                        </li>
                        <li className="mt-4">
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        handleLogout()
                                        setIsOpen(false)
                                    }}
                                    className="w-full bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="block w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-center transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
