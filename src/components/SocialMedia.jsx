import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

const socialLinks = [
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/be_one_percent_official',
        color: 'hover:text-pink-500',
    },
    {
        icon: <FaTelegram />,
        url: 'https://t.me/yourchannel',
        color: 'hover:text-blue-500',
    },
    {
        icon: <FaTwitter />,
        url: 'https://twitter.com/yourprofile',
        color: 'hover:text-blue-400',
    },
    {
        icon: <FaYoutube />,
        url: 'https://youtube.com/yourchannel',
        color: 'hover:text-red-500',
    },
]

export default function SocialMedia() {
    return (
        <section className="pb-12 mt-20 bg-black text-white text-center">
            <h3 className="text-2xl font-semibold mb-3">Follow Us</h3>
            <div className="w-16 mx-auto h-1 bg-indigo-500 mb-6"></div>

            <div className="flex justify-center space-x-6 mt-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 text-5xl transition ${social.color}`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="text-gray-500 text-sm mt-20">
                &copy; {new Date().getFullYear()} Be One Percent. All Rights
                Reserved.
            </p>
        </section>
    )
}
