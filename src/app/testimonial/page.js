'use client'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import TestimonialPage from '../../components/TestimonialPage'

export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Header */}
            <TestimonialPage />

            {/* Footer */}
            <Footer />
        </div>
    )
}
