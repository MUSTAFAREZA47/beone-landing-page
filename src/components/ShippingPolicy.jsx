'use client'
import React from 'react'

const ShippingPolicy = () => {
    return (
        <div className="container mx-auto max-w-4xl pt-[120px]">
            <h1 className="text-5xl font-bold text-center mb-6">
                Shipping Policy
            </h1>
            <div className="w-[200px] mx-auto h-[1px] bg-indigo-500 mb-10"></div>
            <p className="text-gray-400 mb-4 pl-6">
                Last updated: [Insert Date]
            </p>

            <div className="p-6">
                <h2 className="text-2xl font-semibold mt-6">
                    Digital Delivery Only
                </h2>
                <p>
                    Money Machine X is a **digital product**. We do not offer
                    physical shipments. All purchases will be delivered
                    electronically.
                </p>

                <h2 className="text-xl font-semibold mt-6">Delivery Process</h2>
                <ul className="list-disc pl-6">
                    <li>
                        Once your order and payment are confirmed, we will send
                        an email to your registered email address.
                    </li>
                    <li>
                        This email will contain all necessary Money Machine X
                        files and configurations for download.
                    </li>
                    <li>
                        Our team is available to assist you with the
                        installation process for a smooth setup.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">
                    Support & Assistance
                </h2>
                <p>
                    If you do not receive the email or require assistance with
                    installation, please contact our support team at{' '}
                    <a
                        href="mailto:support@beonepercent.com"
                        className="text-indigo-500"
                    >
                        support@beonepercent.com
                    </a>
                    . We are here to help.
                </p>
            </div>
        </div>
    )
}

export default ShippingPolicy
