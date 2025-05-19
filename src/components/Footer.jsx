import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const socialLinks = [
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/moneymachinexea',
        color: 'hover:text-pink-500',
        label: 'Instagram',
    },
    {
        icon: <FaTelegram />,
        url: 'https://t.me/+uZ9wUNy8TsIwY2I1',
        color: 'hover:text-blue-500',
        label: 'Telegram',
    },
    // {
    //     icon: <FaYoutube />,
    //     url: 'https://youtube.com/yourchannel',
    //     color: 'hover:text-red-500',
    //     label: 'YouTube',
    // },
]

const footerLinks = {
    company: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Testimonial', href: '/testimonial' },
    ],
    legal: [
        { name: 'Terms of Service', href: '/our-policy/terms-of-service' },
        { name: 'Privacy Policy', href: '/our-policy/privacy-policy' },
        { name: 'Refund Policy', href: '/our-policy/refund-policy' },
        { name: 'Shipping Policy', href: '/our-policy/shipping-policy' },
        { name: 'Legal Notice', href: '/our-policy/legal-notice' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo & Description */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="relative w-40 h-12 mx-auto md:mx-0">
                            <Image
                                src="/logo.png"
                                alt="Be One Percent Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Money Machine X is an advanced mathematical algorithmic
                            trading robot designed to analyze real-time market
                            conditions and execute high-probability trades in forex,
                            crypto, and stocks.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-100">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-100">Legal Policies</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-100">Contact Us</h3>
                        <div className="space-y-3">
                            <p className="text-gray-400">
                                Business Bay, Dubai, UAE
                            </p>
                            <p className="text-gray-400">
                                +971-50-1234567
                            </p>
                            <p className="text-gray-400">
                                support@moneymachinex.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-100">Follow Us</h3>
                        <div className="w-16 h-1 bg-indigo-500 mx-auto my-2"></div>
                        
                        <div className="flex justify-center space-x-8 mt-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 text-3xl transition-colors duration-300 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <p className="text-gray-500 text-sm mt-8">
                            &copy; {new Date().getFullYear()} Be One Percent. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
