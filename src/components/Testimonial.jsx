import React from 'react'
import PropTypes from 'prop-types'
import { testimonialData } from '../constant'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TestimonialItem = ({ data }) => {
    const { text, user } = data
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 h-full hover:bg-white/10 transition-all duration-300"
        >
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{text}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                    <h4 className="text-xl font-semibold text-white">{user}</h4>
                </div>
            </div>
        </motion.div>
    )
}

TestimonialItem.propTypes = {
    data: PropTypes.object.isRequired,
}

const Testimonial = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TestimonialItem data={data} />
                        </motion.div>
                    ))}
                </div>

                {/* View More Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link 
                        href="/testimonial"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                    >
                        <span className="text-lg font-medium">View More Testimonials</span>
                        <svg 
                            className="w-5 h-5 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial