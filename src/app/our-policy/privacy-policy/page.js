'use client'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import PrivacyPolicy from '../../../components/PrivacyPolicy'


export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <PrivacyPolicy />

            {/* Footer */}
            <Footer />
        </div>
    )
}
