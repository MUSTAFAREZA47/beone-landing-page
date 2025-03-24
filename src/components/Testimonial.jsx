import React from 'react'
import PropTypes from 'prop-types'
import { testimonialData } from '../constant'
import Link from 'next/link'


const TestimonialItem = ({ data }) => {
    const { text, user } = data
    return (
        <div className="bg-neutral-900 shadow-xl rounded-xl h-full p-6 lg:p-12">
            <div className="p-6 pb-0 text-center">
                <p className="text-[17px] leading-[1.7] opacity-60">{text}</p>
                <h4 className="text-xl font-medium mt-12 mb-2">{user}</h4>
            </div>
        </div>
    )
}
TestimonialItem.propTypes = {
    data: PropTypes.object.isRequired,
}

const Testimonial = () => {
    return (
        <section className="mt-20 text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="max-w-2xl text-center">
                        <h1 className="text-3xl uppercase pb-2 text-neutral-200 font-bold">
                            Testimonials
                        </h1>
                        <div className="h-1 bg-blue-500 w-20 mx-auto mt-2"></div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {testimonialData.map((data, i) => (
                        <div
                            className="col-span-3 md:col-span-1 mt-24 md:mt-12"
                            key={i}
                        >
                            <TestimonialItem data={data} />
                        </div>
                    ))}
                </div>
                <Link href="/testimonial">
                    <p className="flex justify-center my-12 text-blue-500 underline">
                        View More Testimonials
                    </p>
                </Link>
            </div>
        </section>
    )
}

export default Testimonial