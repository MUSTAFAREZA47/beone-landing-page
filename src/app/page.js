import Image from 'next/image'
import Header from '../components/Header'
import SectionOne from '../components/SectionOne'
import FAQ from '../components/FAQ'
import { SlidingCard } from '../components/SlidingCard'
import CTAButton from '../components/CTA'
import SectionThree from '../components/SectionThree'
import HeroSection from '../components/HeroSection'
import SectionTwo from '../components/SectionTwo'
import Testimonials from '../components/Testimonial'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Logo */}
            <div className="flex flex-col justify-center items-center py-8">
                <Image
                    className="block"
                    src="/logo.png"
                    alt="logo"
                    width={250}
                    height={50}
                />
            </div>

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

            {/* SlidingCard */}
            <SlidingCard />
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

            <SocialMedia/>
        </div>
    )
}
