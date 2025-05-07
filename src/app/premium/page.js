'use client'

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

const videos = [
    {
        id: 1,
        title: 'INSTALLATION OF MONEY MACHINE X',
        url: 'https://www.youtube.com/watch?v=8FoSM_TIbno',
    },
    {
        id: 2,
        title: 'PARAMETER EXPECTATIONS',
        url: 'https://www.youtube.com/watch?v=Q4bHoR5Mt-M',
    },
    {
        id: 3,
        title: 'INTRODUCTION OF TRADING',
        url: 'https://www.youtube.com/watch?v=7jubIegQcRg',
    },
    {
        id: 4,
        title: 'CANDLESTICKS AND CANDLESTICK PATTERNS',
        url: 'https://www.youtube.com/watch?v=QStu0y4bZEo',
    },
    {
        id: 5,
        title: 'MARKET STRUCTURE, SUPPORT RESISTANCE, TRENDLINES AND PREMIUM DISCOUNT THEORY',
        url: 'https://www.youtube.com/watch?v=6DNqXLq1JaM',
    },
    {
        id: 6,
        title: 'FIBONACCI RETRACEMENT',
        url: 'https://www.youtube.com/watch?v=JoVlUAP-ZuY',
    },
    {
        id: 7,
        title: 'CHART PATTERNS AND INTRODUCTION OF MARKET ',
        url: 'https://www.youtube.com/watch?v=ifIWZqeQRio',
    },
    {
        id: 8,
        title: 'INDUCEMENT EXPLAINED',
        url: 'https://www.youtube.com/watch?v=fKB-FSQi6p0',
    },
    {
        id: 9,
        title: 'STRUCTURE MAPPING',
        url: 'https://www.youtube.com/watch?v=fbbHSz1WjNQ',
    },
    {
        id: 10,
        title: 'TREND LINES AND CHART PATTERNS',
        url: 'https://www.youtube.com/watch?v=jm9P63b5gRA',
    },
    {
        id: 11,
        title: 'SESSION LIQUIDITY',
        url: 'https://www.youtube.com/watch?v=PUjlGRrNocA',
    },
    {
        id: 12,
        title: 'DEMAND & SUPPLY AND ORDER BLOCK',
        url: 'https://www.youtube.com/watch?v=cgy155qz4n4',
    },
    {
        id: 13,
        title: 'FOREX FUNDAMENTALS',
        url: 'https://www.youtube.com/watch?v=DAkEDQpSMqc',
    },
    {
        id: 14,
        title: 'ORDER FLOW',
        url: 'https://www.youtube.com/watch?v=xrHajcGh3xQ',
    },
]

const VideoModal = ({ isOpen, onClose, video }) => {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div className="aspect-[16/9] w-full">
                        <ReactPlayer
                            url={video.url}
                            width="100%"
                            height="100%"
                            controls
                            playing={true}
                            config={{
                                youtube: {
                                    playerVars: { 
                                        modestbranding: 1,
                                        rel: 0,
                                        fs: 1
                                    }
                                }
                            }}
                            style={{ aspectRatio: '16/9' }}
                        />
                    </div>
                    
                    <div className="p-4 sm:p-6">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                            {video.title}
                        </h2>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function PremiumVideosPage() {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const handleVideoClick = (video) => {
        setSelectedVideo(video)
    }

    const handleCloseModal = () => {
        setSelectedVideo(null)
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            
            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                            🎓 Premium Video Content
                        </h1>
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 w-24 mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-gray-300 text-lg sm:text-xl">
                            Master trading with our comprehensive video series
                        </p>
                    </motion.div>

                    <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => handleVideoClick(video)}
                            >
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-gray-700">
                                    <div className="aspect-video relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                                        <img
                                            src={`https://img.youtube.com/vi/${video.url.split('v=')[1]}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <h2 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {video.title}
                                        </h2>
                                        <div className="mt-2 flex items-center text-sm text-gray-400">
                                            <span className="inline-flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Video Tutorial
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={handleCloseModal}
                video={selectedVideo}
            />

            <Footer />
        </div>
    )
}
