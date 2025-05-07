import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SectionOne = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What is Money Machine X
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/algo_2.png"
                alt="Money Machine X Algorithm"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed">
                Money Machine X is an advanced mathematical algorithmic
                trading robot designed to analyze real-time market
                conditions and execute high-probability trades in forex,
                crypto, and stocks.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether the market is going up, down, or staying sideways,
                our algorithm ensures consistent profit generation with
                precision-based entry and exit points.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-indigo-400 font-semibold mb-2">24/7 Trading</h3>
                <p className="text-gray-400 text-sm">Automated trading around the clock</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <h3 className="text-indigo-400 font-semibold mb-2">Real-time Analysis</h3>
                <p className="text-gray-400 text-sm">Advanced market analysis and predictions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne