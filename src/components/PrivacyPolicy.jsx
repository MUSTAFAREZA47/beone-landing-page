'use client'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto max-w-4xl pt-[120px]">
            <h1 className="text-5xl font-bold text-center mb-6">
                Privacy Policy
            </h1>
            <div className="w-[200px] mx-auto h-[1px] bg-indigo-500 mb-10"></div>

            <p className="text-gray-400 mb-4 pl-6">
                Last updated: [Insert Date]
            </p>

            <div className=" p-6">
                <p className="mb-4">
                    At <strong>Money Machine X</strong>, accessible from [your
                    website URL], protecting our users' privacy is a top
                    priority. This Privacy Policy outlines the types of
                    information we collect, how we use it, and your rights
                    regarding your personal data.
                </p>

                <h2 className="text-xl font-semibold mt-6">Consent</h2>
                <p>
                    By using our website and services, you consent to this
                    Privacy Policy and agree to its terms.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    Information We Collect
                </h2>
                <ul className="list-disc list-inside">
                    <li>
                        When you register for an account (name, email, phone
                        number, address, etc.).
                    </li>
                    <li>
                        When you contact us directly (message content,
                        attachments, and details you provide).
                    </li>
                    <li>
                        When you use our website (log data, cookies, IP
                        addresses, and browsing behavior).
                    </li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">
                    How We Use Your Information
                </h2>
                <ul className="list-disc list-inside">
                    <li>Operate and improve our website and services.</li>
                    <li>
                        Personalize your experience and enhance functionality.
                    </li>
                    <li>Provide customer support and respond to inquiries.</li>
                    <li>
                        Send updates, promotions, and marketing communications.
                    </li>
                    <li>Prevent fraud and maintain security.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">Log Files</h2>
                <p>
                    Like many websites, Money Machine X uses log files to
                    analyze trends, administer the site, track user behavior,
                    and gather demographic insights.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    Cookies and Web Beacons
                </h2>
                <p>
                    Our website uses cookies to store user preferences and
                    enhance browsing experience. You can disable cookies through
                    your browser settings.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    Third-Party Services and Advertisers
                </h2>
                <p>
                    We may use third-party services (e.g., analytics,
                    advertising partners) that collect information through
                    tracking technologies.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    CCPA Privacy Rights (For California Consumers)
                </h2>
                <ul className="list-disc list-inside">
                    <li>Request access to the personal data we collect.</li>
                    <li>Request deletion of your personal data.</li>
                    <li>Opt out of the sale of your personal data.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">
                    GDPR Data Protection Rights (For EU Users)
                </h2>
                <ul className="list-disc list-inside">
                    <li>Access, correct, or delete your personal data.</li>
                    <li>Restrict or object to data processing.</li>
                    <li>Request data portability.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">
                    Children's Privacy
                </h2>
                <p>
                    Money Machine X does not knowingly collect personal data
                    from children under 13. If you believe a child has provided
                    such information, please contact us.
                </p>

                <h2 className="text-xl font-semibold mt-6">
                    Changes to This Privacy Policy
                </h2>
                <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page.
                </p>

                <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
                <p>
                    If you have any questions, please contact us at [your
                    contact email].
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy
