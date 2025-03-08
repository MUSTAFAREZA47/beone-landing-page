import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Home() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    )
}
