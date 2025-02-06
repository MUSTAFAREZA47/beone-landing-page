'use client'
import React from 'react'
import { BackgroundGradient } from '../components/ui/background-gradient'
import Image from 'next/image'

export function Card({ image, title, description }) {
    return (
        <div>
            <BackgroundGradient className="flex flex-col justify-center items-center rounded-[22px] py-5 px-2 max-w-80 bg-zinc-900 text-white">
                <Image
                    src={image}
                    alt="jordans"
                    height="200"
                    width="200"
                    className="object-contain block"
                />
                <p className="text-base sm:text-xl mt-5 mb-2">
                    {title}
                </p>

                <p className="text-sm text-gray-400 text-center">
                    {description}
                </p>
            </BackgroundGradient>
        </div>
    )
}
