'use client'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import ShippingPolicy from '../../../components/ShippingPolicy'


export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <ShippingPolicy />

            {/* Footer */}
            <Footer />
        </div>
    )
}
