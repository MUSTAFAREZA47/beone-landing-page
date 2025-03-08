import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import OurPolicy from '../../components/OurPolicy'

export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <OurPolicy />

            {/* Footer */}
            <Footer />
        </div>
    )
}
