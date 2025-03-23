'use client'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import FAQ from '../components/FAQ'
import CTAButton from '../components/CTA'
import SectionThree from '../components/SectionThree'
import HeroSection from '../components/HeroSection'
import SectionTwo from '../components/SectionTwo'
import Testimonials from '../components/Testimonial'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import { Car } from 'lucide-react'
import { CarouselDemo } from '../components/SlidingCard02'


export default function Home() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Header */}
            <Header />

            {/* Hero section */}
            <HeroSection />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* SectionOne */}
            <SectionOne />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* SectionTwo */}
            <SectionTwo />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* SectionThree */}
            <SectionThree />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* Carousel */}
            <div className="w-full h-full my-20">
                <h2 className="max-w-7xl text-center mx-auto text-3xl font-bold text-neutral-200 uppercase">
                    Real Profits. <br className="sm:hidden" /> Real Results.
                </h2>
                <CarouselDemo />
            </div>
            <div className="flex justify-center">
                <CTAButton />
            </div>

            {/* Testimonials */}
            <Testimonials />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* FAQ */}
            <FAQ />
            <div className="flex justify-center mt-8 mb-20">
                <CTAButton />
            </div>

            <NewsLetter />
            <div className="flex justify-center mt-8">
                <CTAButton />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
