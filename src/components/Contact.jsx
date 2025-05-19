'use client'
import React, { useState } from 'react'
import { WorldMapDemo } from './Worldmap'

import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log(formData)
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-center mb-6">
                    Contact Us
                </h2>
                <div className="w-[200px] mx-auto h-[2px] bg-indigo-500 mb-10"></div>
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Side - Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-8 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                        Get in Touch
                    </h3>
                    <p className="text-gray-400 mb-6">
                        We'd love to hear from you! Feel free to reach out with
                        any queries.
                    </p>
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center text-gray-300 group"
                        >
                            <MapPinIcon className="w-6 h-6 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors duration-300" />
                            <div>
                                <strong className="text-gray-200">
                                    Address:{' '}
                                </strong>
                                <span className="text-gray-400">
                                    Business Bay, Dubai, UAE
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center text-gray-300 group"
                        >
                            <PhoneIcon className="w-6 h-6 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors duration-300" />
                            <div>
                                <strong className="text-gray-200">
                                    Phone:{' '}
                                </strong>
                                <span className="text-gray-400">
                                    +971-50-1234567
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center text-gray-300 group"
                        >
                            <EnvelopeIcon className="w-6 h-6 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors duration-300" />
                            <div>
                                <strong className="text-gray-200">
                                    Email:{' '}
                                </strong>
                                <span className="text-gray-400">
                                    support@moneymachinex.com
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center text-gray-300 group"
                        >
                            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors duration-300" />
                            <div>
                                <strong className="text-gray-200">
                                    Telegram :{' '}
                                </strong>
                                <a
                                    href="https://t.me/+uZ9wUNy8TsIwY2I1"
                                    className="text-blue-400"
                                >
                                    Join Our Community
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-8 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                        Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-200 font-medium mb-2"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full p-3 bg-zinc-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-100 placeholder-gray-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-200 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 bg-zinc-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-100 placeholder-gray-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-gray-200 font-medium mb-2"
                            >
                                Contact Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your contact number"
                                className="w-full p-3 bg-zinc-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-100 placeholder-gray-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-200 font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                rows="2"
                                className="w-full p-3 bg-zinc-800/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-gray-100 placeholder-gray-500 transition-colors duration-300 resize-none"
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-16"
            >
                <WorldMapDemo />
            </motion.div>
        </div>
    )
}

export default ContactUs
