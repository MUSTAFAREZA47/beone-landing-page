'use client'
import Footer from '../../../components/Footer'
import LegalNotice from '../../../components/LegalNotice'
import Navbar from '../../../components/Navbar'

export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <LegalNotice />

            {/* Footer */}
            <Footer />
        </div>
    )
}
