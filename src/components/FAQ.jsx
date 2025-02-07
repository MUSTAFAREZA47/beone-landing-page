'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
    {
        question: 'How do I get started with Money Machine X?',
        answer: 'Simply purchase or subscribe, connect your trading account, and let the Money Machine X trade for you—no complex setup required',
    },
    {
        question: 'What markets does Money Machine X trade in?',
        answer: 'Money Machine X trades in forex and crypto, adapting to market trends using its advanced mathematical algorithm',
    },
    {
        question: 'Is Money Machine X really profitable?',
        answer: 'Yes! Money Machine X is tested & verified with performance and genrating consistent profits',
    },
    {
        question: 'Can I withdraw profits daily?',
        answer: 'Absolutely! You have full control over withdrawals and can access your profits anytime',
    },
    {
        question: 'Do I need trading experience?',
        answer: 'No! Money Machine X is fully automated—just set it up and relax while it trades for you',
    },
]

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="mt-20 text-white">
            <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h6 className="text-lg text-white font-medium mb-5">
                        🔍 FAQs
                    </h6>
                    <h2 className="text-3xl font-bold text-neutral-200 uppercase leading-snug">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-2 border-gray-900 rounded-2xl transition-all duration-300 ${
                                openIndex === index
                                    ? 'bg-gray-900'
                                    : 'hover:bg-gray-900'
                            }`}
                        >
                            {/* Question Button */}
                            <button
                                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium transition duration-300 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <FaChevronDown
                                    className={` transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* Answer (Collapsible) */}
                            <div
                                className={`px-6 pb-4 overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? 'max-h-40 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className="text-base">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
