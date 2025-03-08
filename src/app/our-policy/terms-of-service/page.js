'use client'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import TermsOfService from '../../../components/TermsOfService'

export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <TermsOfService />

            {/* Footer */}
            <Footer />
        </div>
    )
}