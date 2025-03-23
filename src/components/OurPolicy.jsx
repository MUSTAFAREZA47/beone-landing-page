'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const policies = [
    { title: 'Terms of Service', path: '/our-policy/terms-of-service' },
    { title: 'Refund Policy', path: '/our-policy/refund-policy' },
    { title: 'Shipping Policy', path: '/our-policy/shipping-policy' },
    { title: 'Privacy Policy', path: '/our-policy/privacy-policy' },
    { title: 'Legal Notice', path: '/our-policy/legal-notice' },
]

const LegalPolicies = () => {
    const router = useRouter()

    return (
        <div className="container mx-auto max-w-6xl pt-[120px] pb-10 px-6">
            <h2 className="text-4xl font-bold text-center mb-6">
                Legal Policies
            </h2>
            <div className="w-[200px] mx-auto h-[2px] bg-indigo-500 mb-10"></div>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {policies.map((policy, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(policy.path)}
                        className="bg-zinc-900 p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300 transform hover:scale-105"
                    >
                        <h3 className="text-2xl font-semibold text-indigo-600">
                            {policy.title}
                        </h3>
                        <p className="text-gray-600 mt-2">Click to read more</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LegalPolicies
