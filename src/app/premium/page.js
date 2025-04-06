'use client'

import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
        id: 13,
        title: 'ORDER FLOW',
        url: 'https://www.youtube.com/watch?v=xrHajcGh3xQ',
    },
]

export default function PremiumVideosPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white px-6 py-[120px]">
                <h1 className="text-4xl font-bold text-center mb-10">
                    🎓 Premium Video Content
                </h1>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="aspect-video">
                                <ReactPlayer
                                    url={video.url}
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-white">
                                    {video.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
