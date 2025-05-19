'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const values = [
    {
        title: 'Empowerment',
        description:
            'We provide the tools and knowledge to help individuals take control of their financial future.',
    },
    {
        title: 'Innovation',
        description:
            'We continuously evolve, leveraging technology to create smarter and more efficient trading solutions.',
    },
    {
        title: 'Transparency',
        description:
            'We believe in honest, clear, and ethical business practices to build long-lasting relationships.',
    },
    {
        title: 'Excellence',
        description:
            'We are committed to delivering high-quality services that drive success for our clients.',
    },
    {
        title: 'Community',
        description:
            'We foster a supportive network where traders, investors, and professionals can grow and thrive together.',
    },
]

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-center mb-6">
                    About Us
                </h2>
                <div className="w-[200px] mx-auto h-[2px] bg-indigo-500 mb-10"></div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
            >
                {/* Left: Mission Image */}
                <div className="flex justify-center items-center">
                    <div className="relative group">
                        <Image
                            src="/vision.png"
                            alt="Our Vision"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                </div>

                {/* Right: Mission Content */}
                <div className="w-full">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-100">
                        Our Vision
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        At BeOne Percent, we envision a future where financial
                        freedom is accessible to everyone. Whether you are a
                        trader, a business owner, or a working professional, our
                        goal is to empower you with innovative trading solutions
                        like Money Machine X to help you generate passive income
                        and achieve long-term financial stability.
                    </p>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 md:gap-12 mt-20 md:mt-32"
            >
                {/* Left: Mission Content */}
                <div className="w-full">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-100">
                        Our Mission
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        Our mission is to simplify and revolutionize the trading
                        experience by providing advanced automation, expert
                        mentorship, and real-time market insights. We strive to
                        bridge the gap between traditional investing and
                        cutting-edge technology, making algorithmic trading a
                        profitable and hassle-free journey for everyone.
                    </p>
                </div>

                {/* Right: Vision Image */}
                <div className="flex justify-center items-center">
                    <div className="relative group">
                        <Image
                            src="/mission.png"
                            alt="Our Mission"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                </div>
            </motion.div>

            {/* Value Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 mt-20 md:mt-32"
            >
                {/* Left: Value Image */}
                <div className="flex justify-center items-center">
                    <div className="relative group">
                        <Image
                            src="/value.png"
                            alt="Our Values"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                </div>

                {/* Right: Value Content */}
                <div className="w-full">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-100">
                        Our Values
                    </h2>
                    <div className="space-y-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
