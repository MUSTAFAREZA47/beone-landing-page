import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (
      <div className="mt-20 px-4">
          <h2 className="text-center text-3xl font-bold text-neutral-200 uppercase">
              What is Money Machine X
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0">
              <Image
                  src="/algo_2.png"
                  alt="algo"
                  width={400}
                  height={400}
                  className="rounded-lg"
              />
              
              <div className="text-white text-lg md:w-[50%] md:ml-8">
                  <p className="mb-5">
                      Money Machine X is an advanced mathematical algorithmic
                      trading robot designed to analyze real-time market
                      conditions and execute high-probability trades in forex,
                      crypto, and stocks.
                  </p>
                  <p>
                      Whether the market is going up, down, or staying sideways,
                      our algorithm ensures consistent profit generation with
                      precision-based entry and exit points.
                  </p>
              </div>
          </div>
      </div>
  )
}

export default SectionOne