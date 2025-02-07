'use client'
import React from 'react'
import { BackgroundGradient } from '../components/ui/background-gradient'
import Image from 'next/image'

export function Card({ image, title, description }) {
    return (
        <div className="flex justify-center p-4">
            <BackgroundGradient className="flex flex-col justify-center items-center rounded-[22px] py-5 px-4 bg-zinc-900 text-white w-full max-w-xs md:max-w-sm">
                <Image
                    src={image}
                    alt={title}
                    height={200}
                    width={200}
                    className="object-contain block w-full h-auto max-h-48"
                />
                <p className="text-base md:text-xl mt-5 mb-2 font-semibold text-center">
                    {title}
                </p>
                <p className="text-sm md:text-base text-gray-400 text-center">
                    {description}
                </p>
            </BackgroundGradient>
        </div>
    )
}
