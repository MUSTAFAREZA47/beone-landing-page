'use client'
import React, { useState, useEffect } from 'react'

// data for testimonials
import { testimonials } from '../constant.js'

// data for profit screenshots
import { profitScreenshots } from '../constant.js'

const TestimonialPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="text-white min-h-screen pt-[120px] px-6 pb-20">
            {/* Testimonials Section */}
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold relative inline-block pb-2">
                    What Our Traders Say
                    <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
                </h2>

                <div className="relative isolate overflow-hidden mt-10">
                    <div
                        className="flex transform transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 flex items-center justify-center"
                            >
                                <div className="bg-zinc-900 border border-white/30 rounded-xl px-10 py-10 max-w-lg shadow-lg text-center">
                                    <p className="text-[17px] leading-[1.7] opacity-60">
                                        "{testimonial.feedback}"
                                    </p>
                                    <h4 className="text-xl font-medium mt-12 mb-2">
                                        {testimonial.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Profit Screenshots Section */}
            <div className="max-w-6xl mx-auto text-center mt-20">
                <h2 className="text-4xl font-bold relative inline-block pb-2">
                    Real Profit Proofs
                    <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {profitScreenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Profit ${index + 1}`}
                            className="w-full rounded-lg border shadow-lg transform hover:scale-105 hover:border-blue-500 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialPage
