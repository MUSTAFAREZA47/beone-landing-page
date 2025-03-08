'use client'
import React from 'react'

const LegalNotice = () => {
    return (
        <div className="container mx-auto max-w-4xl pt-[120px]">
            <h1 className="text-5xl font-bold text-center mb-6">
                Legal Notice
            </h1>
            <div className="w-[200px] mx-auto h-[1px] bg-indigo-500 mb-10"></div>
            <p className="text-gray-400 mb-4 pl-6">
                Last updated: [Insert Date]
            </p>

            <div className="p-6">
                <p>
                    **Money Machine X** is developed by the **BeOne Percent**
                    team and sold exclusively at
                    <a href="[Your Website URL]" className="text-indigo-500">
                        {' '}
                        [Your Website URL]
                    </a>
                    .
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    No Financial Advice
                </h2>
                <p>
                    Our automated trading tools are designed to assist users in
                    making trading decisions but **do not provide financial,
                    investment, or trading advice**.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    No Profit Guarantees
                </h2>
                <p>
                    We **do not guarantee any profits** and **are not
                    responsible for any investment decisions** made using our
                    products.
                </p>

                <h2 className="text-xl font-semibold mt-6">Risk Disclaimer</h2>
                <p>
                    Trading in financial markets carries **inherent risks**. Any
                    use of **Money Machine X** is done at the **user's own
                    discretion and risk**.
                </p>
                <p>
                    Users should carefully assess their **financial situation
                    and risk tolerance** before engaging in trading activities.
                </p>
            </div>
        </div>
    )
}

export default LegalNotice
