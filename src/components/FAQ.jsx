'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        question: 'What is Money Machine X?',
        answer: 'Money Machine X is an advanced algorithmic trading system that uses sophisticated mathematical models to analyze market conditions and execute trades automatically. It operates 24/7 across forex, crypto, and stock markets to generate consistent profits.',
    },
    {
        question: 'How does the algorithm work?',
        answer: 'Our algorithm combines machine learning, technical analysis, and market sentiment analysis to identify high-probability trading opportunities. It continuously monitors market conditions, executes trades based on predefined parameters, and manages risk automatically.',
    },
    {
        question: 'Is it safe to use?',
        answer: 'Yes, we implement industry-standard security measures including end-to-end encryption, secure API connections, and regular security audits. Your trading account remains under your control, and we never have access to withdraw funds.',
    },
    {
        question: 'What are the fees and costs?',
        answer: 'We operate on a performance-based fee structure. There are no upfront costs or hidden fees. We only charge a small percentage of the profits generated, ensuring our success is directly tied to your success.',
    },
    {
        question: 'How do I get started?',
        answer: 'Getting started is simple: choose your preferred plan, connect your trading account through our secure API, and let the algorithm begin trading. Our team provides full support throughout the setup process.',
    },
    {
        question: 'Can I withdraw my profits anytime?',
        answer: 'Yes, you have complete control over your funds. You can withdraw your profits at any time without any restrictions or penalties. The algorithm will continue trading with the remaining balance.',
    }
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                                {/* Question Button */}
                                <button
                                    className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-xl"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-lg font-medium text-white">{faq.question}</span>
                                    <FaChevronDown
                                        className={`w-5 h-5 text-indigo-400 transform transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4">
                                                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
