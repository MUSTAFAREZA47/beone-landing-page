import { FaTelegram } from 'react-icons/fa'

export default function CTAButton() {
    return (
        <a
            href="https://t.me/moneymachinexea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on Telegram"
            className="flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-xl mx-auto px-6 py-4 text-sm sm:text-xl font-semibold text-white uppercase rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
            <span>Contact us</span>
            <FaTelegram className="text-2xl sm:text-3xl" />
        </a>
    )
}
