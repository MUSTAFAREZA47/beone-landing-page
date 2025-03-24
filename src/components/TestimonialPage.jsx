'use client'
import { useState, useEffect } from 'react'

// data for testimonials
import { testimonials } from '../constant.js'

// data for profit screenshots
import { profitScreenshots } from '../constant.js'


export default function TestimonialPage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length,
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="text-white min-h-screen pt-[120px] px-6">
            {/* Testimonials Section */}
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold relative inline-block pb-2">
                    What Our Traders Say
                    <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
                </h2>

                <div className="relative isolate overflow-hidden mt-10">
                    <div
                        className="flex transition-transform duration-500"
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
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            </div>

            {/* Profit Screenshots Section */}
            <div className="max-w-6xl mx-auto text-center mt-20">
                <h2 className="text-4xl font-bold relative inline-block pb-2">
                    Real Profit Proofs
                    <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                    {profitScreenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Profit ${index + 1}`}
                            className="w-full rounded-lg border border-blue-500/50 shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
