import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

const socialLinks = [
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/be_one_percent_official',
        color: 'hover:text-pink-500',
    },
    {
        icon: <FaTelegram />,
        url: 'https://t.me/yourchannel',
        color: 'hover:text-blue-500',
    },
    {
        icon: <FaTwitter />,
        url: 'https://twitter.com/yourprofile',
        color: 'hover:text-blue-400',
    },
    {
        icon: <FaYoutube />,
        url: 'https://youtube.com/yourchannel',
        color: 'hover:text-red-500',
    },
]

export default function Footer() {
    return (
        <footer className="dark:bg-black text-white p-10 border-t border-white/10 mx-auto px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Logo & Description */}
                <div>
                    <div>
                        <Image
                            className="block"
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={50}
                        />
                    </div>
                    <p className="text-gray-400 mt-5">
                        Money Machine X is an advanced mathematical algorithmic
                        trading robot designed to analyze real-time market
                        conditions and execute high-probability trades in forex,
                        crypto, and stocks.
                    </p>
                </div>

                {/* Company Links */}
                <div className="md:ml-20 md:mt-4">
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-gray-400"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/testimonial"
                                className="hover:text-gray-400"
                            >
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="md:mt-4 md:ml-10">
                    <h3 className="text-lg font-semibold mb-3">Legal Policies</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/our-policy/terms-of-service"
                                className="hover:text-gray-400"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/our-policy/privacy-policy"
                                className="hover:text-gray-400"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/our-policy/refund-policy"
                                className="hover:text-gray-400"
                            >
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/our-policy/shipping-policy"
                                className="hover:text-gray-400"
                            >
                                Shipping Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/our-policy/legal-notice"
                                className="hover:text-gray-400"
                            >
                                Legal Notice
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:mt-4">
                    <h3 className="text-xl font-bold mb-3">Address</h3>
                    <p className="text-gray-400">
                        We provide high-quality services to help you grow and
                        succeed.
                    </p>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-8">
                <section className="pb-12 mt-20 bg-black text-white text-center">
                    <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
                    <div className="w-16 mx-auto h-1 bg-indigo-500 mb-6"></div>

                    <div className="flex justify-center space-x-6 mt-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 text-5xl transition ${social.color}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-500 text-sm mt-20">
                        &copy; {new Date().getFullYear()} Be One Percent. All
                        Rights Reserved.
                    </p>
                </section>
            </div>
        </footer>
    )
}
