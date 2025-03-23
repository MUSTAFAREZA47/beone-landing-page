'use client'

import {Carousel} from '../components/ui/carousel'
import {slideData} from '../constant'
export function CarouselDemo() {

    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    )
}
