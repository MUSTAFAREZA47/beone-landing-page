'use client'
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

export default function SectionThree() {
    const steps = [
        'Purchase or Subscribe to Money Machine X',
        'Connect Your Trading Account - Simple Setup',
        'Let Money Machine X Trade for You 24/7',
        'Watch Your Profits Grow & Withdraw Anytime!',
    ]

    return (
        <div className="h-auto relative flex flex-col items-center px-6 mt-20">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-neutral-200 uppercase text-center mb-10">
                How Money Machine X Works?
            </h2>

            {/* Steps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  w-full max-w-6xl">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-900 text-white px-5 py-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <div className="bg-yellow-600 flex flex-col justify-center items-center p-4 rounded-lg">
                            <FaRegLightbulb className="text-3xl" />
                            <p className="text-xl font-bold mt-2 text-center">
                                Step {index + 1}
                            </p>
                        </div>
                        <p className="text-lg font-medium ml-6 leading-snug">
                            {step}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
