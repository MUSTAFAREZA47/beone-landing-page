'use client'
import Image from 'next/image'
import React from 'react'

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
        <div className="container mx-auto pt-[120px] px-6">
            <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
            <div className="w-[200px] mx-auto h-[2px] bg-indigo-500 mb-10"></div>
            {/* Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left: Mission Image */}
                <div className="flex justify-center items-center mb-10">
                    <Image
                        src="/vision.png" // Update with the actual image path
                        alt="Our Vision"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right: Mission Content */}
                <div className="w-full md:w-1/2 md:ml-[150px]">
                    <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                        At BeOne Percent, we envision a future where financial
                        freedom is accessible to everyone. Whether you are a
                        trader, a business owner, or a working professional, our
                        goal is to empower you with innovative trading solutions
                        like Money Machine X to help you generate passive income
                        and achieve long-term financial stability.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="flex flex-col-reverse gap-10 md:grid md:grid-cols-2 items-center mt-32">
                {/* Left: Mission Content */}
                <div className="w-full md:w-1/2 md:ml-[200px]">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
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
                    <Image
                        src="/mission.png" // Update with the actual image path
                        alt="Our Mission"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Value Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-32">
                {/* Left: Value Image */}
                <div className="flex justify-center items-center mb-10">
                    <Image
                        src="/value.png" // Update with the actual image path
                        alt="Our Vision"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right: Value Content */}
                <div className="w-full md:w-1/2 md:ml-[150px]">
                    <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                    {values.map((value, index) => (
                        <p key={index} className="text-gray-600 mb-2">
                            <strong>{value.title}:</strong> {value.description}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
