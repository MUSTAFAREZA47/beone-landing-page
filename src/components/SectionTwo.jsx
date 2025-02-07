import React from 'react'
import { datas } from '../data'
import { Card } from '../components/Card'

const SectionTwo = () => {
  return (
      <div className="mt-20 px-4">
          <h2 className="text-center text-3xl font-bold text-neutral-200 uppercase">
              Why Choose Money Machine X
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
              {datas.map((data) => (
                  <div
                      key={data.id}
                    //   className="bg-neutral-800 p-4 rounded-lg shadow-md"
                  >
                      <Card
                          image={data.image}
                          title={data.title}
                          description={data.description}
                      />
                  </div>
              ))}
          </div>
      </div>
  )
}

export default SectionTwo