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

                {/* Desktop Navigation Links */}
                <div className="hidden md:block">
                    <ul className="flex gap-x-4 static w-auto bg-transparent flex-row transition-all duration-300 ease-in-out backdrop-blur-lg">
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
                </div>

                <div className="md:flex md:flex-row md:gap-x-3 hidden">
                    {/* Login Button */}
                    <Link
                        href="https://t.me/moneymachinexeab1percent"
                        className="hidden md:block"
                    >
                        <div className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-md md:flex md:flex-row md:gap-x-3 hidden">
                            <Image
                                src="/telegram.png"
                                alt="telegram"
                                width={25}
                                height={25}
                            />
                            <p>Join</p>
                        </div>
                    </Link>

                    {/* Login Button */}
                    <Link href="/login" className="hidden md:block">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                            Login
                        </button>
                    </Link>
                </div>

                {/* Mobile Navigation Links */}
                {isOpen && (
                    <div>
                        <ul className="flex flex-col absolute top-20 right-0 bg-zinc-800 mr-10 px-20 py-10 rounded-3xl transition-all duration-300 ease-in-out">
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
                            <li>
                                <Link
                                    href="https://t.me/moneymachinexeab1percent"
                                >
                                    <div className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-md flex flex-row gap-x-3">
                                        <Image
                                            src="/telegram.png"
                                            alt="telegram"
                                            width={25}
                                            height={25}
                                        />
                                        <p>Join</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="block py-2">
                                    <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-md">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
