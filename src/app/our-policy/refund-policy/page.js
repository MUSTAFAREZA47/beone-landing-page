'use client'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import RefundPolicy from '../../../components/RefundPolicy'

export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <RefundPolicy />

            {/* Footer */}
            <Footer />
        </div>
    )
}