'use client'
import {WorldMap} from '../components/ui/world-map'
import { motion } from 'motion/react'

export function WorldMapDemo() {
    return (
        <div className=" py-20 dark:bg-black w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    <span className="text-neutral-400">We &nbsp;</span>
                    Sell &nbsp;
                    <span className="text-neutral-400">
                      Worldwide
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Money Machine X is trusted by traders across the globe. No
                    matter where you're based, our advanced algorithmic trading
                    solutions are available to help you trade smarter, faster,
                    and with confidence. Join our growing community and
                    experience the power of automation that knows no borders.
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                            lat: 34.0522,
                            lng: -118.2437,
                        }, // Los Angeles
                    },
                    {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                ]}
            />
        </div>
    )
}
