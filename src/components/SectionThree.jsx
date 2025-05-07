'use client'
import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SectionThree() {
    const steps = [
        {
            title: 'Purchase or Subscribe',
            description: 'Get started with Money Machine X by choosing your preferred plan',
            icon: <FaRegLightbulb className="text-3xl" />
        },
        {
            title: 'Connect Your Account',
            description: 'Simple and secure setup process for your trading account',
            icon: <FaRegLightbulb className="text-3xl" />
        },
        {
            title: 'Automated Trading',
            description: 'Let our advanced algorithm trade for you 24/7',
            icon: <FaRegLightbulb className="text-3xl" />
        },
        {
            title: 'Profit Withdrawal',
            description: 'Withdraw your profits anytime, anywhere',
            icon: <FaRegLightbulb className="text-3xl" />
        }
    ]

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
                        How Money Machine X Works
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-500/20 p-3 rounded-lg">
                                    {step.icon}
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-indigo-400 font-semibold">Step {index + 1}</span>
                                        <div className="h-px w-8 bg-indigo-500/50"></div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
