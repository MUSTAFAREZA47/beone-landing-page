'use client'
import About from "../../components/About";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function Page() {
    return (
        <div className="dark:bg-black text-white">
            {/* Navbar */}
            <Navbar />
            {/* Header */}
            <About />

            
            {/* Footer */}
            <Footer />
        </div>
    )
}
