'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-lg text-white p-4 shadow-md z-50 border-b border-white/10">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image
                        className="block"
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={50}
                    />
                </Link>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-opacity-50 md:bg-transparent text-center md:flex-row transition-all duration-300 ease-in-out backdrop-blur-lg ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li>
                        <Link
                            href="/"
                            className="block py-2 md:py-0 hover:text-gray-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 md:py-0 hover:text-gray-400"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="block py-2 md:py-0 hover:text-gray-400"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/testimonial"
                            className="block py-2 md:py-0 hover:text-gray-400"
                        >
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/our-policy"
                            className="block py-2 md:py-0 hover:text-gray-400"
                        >
                            Legal Policies
                        </Link>
                    </li>
                </ul>

                {/* Login Button */}
                <Link href="/login" className="hidden md:block">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    )
}
