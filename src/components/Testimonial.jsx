import React from 'react'
import PropTypes from 'prop-types'

const testimonialData = [
    {
        img: 'https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur elit. Nulla posuere ipsum molestie sem volutpat, non imperdiet leo porttitor.',
        user: 'Mary Tyler',
        profession: 'Traveller',
    },
    {
        img: 'https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png',
        text: 'Living creeping our waters evening firmament night. After without lights sixth moved together Also form.',
        user: 'Emily Berry',
        profession: 'Traveller',
    },
    {
        img: 'https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user3.png',
        text: 'Creepeth whales man green fruitful. Saw his appear great divide called tree all. Likeness make he land, appear sea for.',
        user: 'John Alex',
        profession: 'Traveller',
    },
]

const TestimonialItem = ({ data }) => {
    const { img, text, user, profession } = data
    return (
        <div className="bg-neutral-900 shadow-xl rounded-b-xl h-full p-6 lg:p-12">
            <div className="w-full mx-auto flex justify-center">
                <div className="w-40 h-40 -mt-28 inline-flex justify-center items-center rounded-full border-4 border-white mx-auto">
                    <img src={img} alt={user} className="rounded-full w-full" />
                </div>
            </div>
            <div className="p-6 pb-0 text-center">
                <p className="text-[17px] leading-[1.7] opacity-60">{text}</p>
                <h4 className="text-xl font-medium mt-12 mb-2">{user}</h4>
                <h6 className="text-blue-600">{profession}</h6>
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
                        <h1 className="text-3xl uppercase text-neutral-200 font-bold mb-6">
                            Testimonial
                        </h1>
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
            </div>
        </section>
    )
}

export default Testimonial