
import Image from 'next/image'
import { datas } from '../data'
import { Card } from '../components/Card'
import { Header } from '../components/Header'

export default function Home() {
    return (
        <div className="bg-black text-white">
            <div className="flex flex-col justify-center items-center">
                <Image
                    className="py-10 block"
                    src="/logo.png"
                    alt="logo"
                    width={300}
                    height={50}
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold uppercase w-auto">
                    Automate Your Trading with Money Machine X
                </h1>
                <p className="text-3xl font-semibold tracking-wide w-auto py-3 px-10 bg-green-700 mt-5 uppercase">
                    Proven, Profitable & 100% Automated
                </p>
            </div>
            <div>Hero Section Image</div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-medium">
                    How Money Machine X Works
                </h2>
                <p className="max-w-6xl">
                    Money Machine X is an advanced mathematical algorithmic
                    trading robot designed to analyze real-time market
                    conditions and execute high-probability trades in forex,
                    crypto, and stocks. Whether the market is going up, down, or
                    staying sideways, our algorithm ensures consistent profit
                    generation with precision-based entry and exit points.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-medium">
                    Why Choose Money Machine X?
                </h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {datas.map((data) => (
                        <div key={data.id}>
                            <Card image={data.image} title={data.title} description={data.description}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
