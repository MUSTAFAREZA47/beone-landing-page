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
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className="dark:bg-black text-white min-h-screen">
            {/* Navbar */}
            <Navbar />
            
            {/* Header */}
            <Header />

            {/* Hero section */}
            <HeroSection />

            {/* SectionOne */}
            <SectionOne />

            {/* SectionTwo */}
            <SectionTwo />

            {/* SectionThree */}
            <SectionThree />

            {/* Carousel */}
            <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-200 uppercase tracking-tight">
                            Real Profits. <br className="sm:hidden" /> Real Results.
                        </h2>
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 w-20 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 sm:mt-12 md:mt-16"
                    >
                        <CarouselDemo />
                    </motion.div>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center my-8 sm:my-12 md:my-16"
            >
                <Link 
                        href="/testimonial"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                    >
                        <span className="text-lg font-medium">View More Profits</span>
                        <svg 
                            className="w-5 h-5 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                        </svg>
                    </Link>
            </motion.div>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Newsletter */}
            <NewsLetter />

            {/* CTA Section */}
            <section className="py-8 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <CTAButton />
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
