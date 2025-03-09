'use client'
import React from 'react'
import { WorldMapDemo } from './Worldmap'
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline' 

const ContactUs = () => {
    return (
        <div className="container mx-auto max-w-6xl pt-[120px] px-6">
            <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
            <div className="w-[200px] mx-auto h-[2px] bg-indigo-500 mb-10"></div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side - Contact Info */}
                <div className="p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                        Get in Touch
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We’d love to hear from you! Feel free to reach out with
                        any queries.
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center text-lg">
                            <MapPinIcon className="w-6 h-6 text-indigo-600 mr-2" />
                            <strong>Address: </strong> Business Bay, Dubai, UAE
                        </p>
                        <p className="flex items-center text-lg">
                            <PhoneIcon className="w-6 h-6 text-indigo-600 mr-2" />
                            <strong>Phone: </strong> +971-50-1234567
                        </p>
                        <p className="flex items-center text-lg">
                            <EnvelopeIcon className="w-6 h-6 text-indigo-600 mr-2" />
                            <strong>Email:</strong> support@beonepercent.com
                        </p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className=" p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">
                        Send Us a Message
                    </h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter your contact number"
                                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                placeholder="Write your message here..."
                                rows="4"
                                className="w-full p-3 border bg-zinc-800 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <WorldMapDemo />
        </div>
    )
}

export default ContactUs
