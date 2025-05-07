import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
      <div className="relative mt-10 flex justify-center items-center px-4">
          <div className="w-full max-w-6xl overflow-hidden rounded-xl shadow-lg relative">
              <Image
                  src="/algo.png"
                  alt="algo"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
          priority
              />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
          </div>
      </div>
  )
}

export default HeroSection