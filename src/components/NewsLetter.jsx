'use client'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NewsLetter() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-xl lg:max-w-lg"
                    >
                        <div className="flex items-center gap-x-4 mb-6">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src="/telegram.png"
                                    alt="telegram"
                                    width={40}
                                    height={40}
                                    className="rounded-lg"
                                />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                                Stay Ahead in Trading!
                            </h2>
                        </div>

                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                            Join Our Telegram Channel for Regular Updates – Get
                            expert market insights, trade alerts, and the latest
                            news. No spam, just value!
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8"
                        >
                            <Link href="https://t.me/moneymachinexeab1percent">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-300"
                                >
                                    Join Our Telegram Channel Now
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:pt-2"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                        >
                            <div className="rounded-lg bg-indigo-500/20 p-3 ring-1 ring-white/10">
                                <CalendarDaysIcon
                                    className="h-6 w-6 text-indigo-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <dt className="mt-4 text-lg font-semibold text-white">
                                Daily Updates
                            </dt>
                            <dd className="mt-2 text-base text-gray-400">
                                Stay informed with real-time market insights,
                                trade setups, and financial news to keep you
                                ahead in trading.
                            </dd>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                        >
                            <div className="rounded-lg bg-indigo-500/20 p-3 ring-1 ring-white/10">
                                <HandRaisedIcon
                                    className="h-6 w-6 text-indigo-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <dt className="mt-4 text-lg font-semibold text-white">
                                No spam
                            </dt>
                            <dd className="mt-2 text-base text-gray-400">
                                We respect your time and attention! Our Telegram
                                channel is focused on quality updates,
                                strategies, and market insights.
                            </dd>
                        </motion.div>
                    </motion.div>
                </div>
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
