'use client'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <section className="relative pt-[120px] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                    >
                        Automate Your Trading with Money Machine X
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12"
                    >
                        <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-8 py-4 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Proven, Profitable & 100% Automated
                        </motion.span>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-12 flex justify-center space-x-4"
                    >
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 rounded-full bg-blue-500"
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            className="w-3 h-3 rounded-full bg-indigo-500"
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            className="w-3 h-3 rounded-full bg-green-500"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
        </section>
    )
}

export default Header