'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Premium() {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetch('/api/google-drive', {
            credentials: 'include',
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    router.push('/login')
                    return
                }
                return res.json()
            })
            .then((data) => {
                if (data?.files) {
                    setFiles(data.files)
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading premium content...</p>

    return (
        <div className='bg-black'>
            <Navbar />
            <div className="container mx-auto max-w-6xl pt-[120px] pb-10">
                <h1 className="text-5xl font-bold text-center mb-6 text-white">
                    Premium Videos
                </h1>
                <div className="w-[200px] mx-auto h-[1px] bg-indigo-500 mb-10"></div>
                <ul className="mt-4 space-y-4">
                    {files.map((file) => {
                        // Extract Google Drive file ID
                        const fileId = file.webViewLink.match(/[-\w]{25,}/)?.[0]
                        const embedVideoURL = fileId
                            ? `https://drive.google.com/file/d/${fileId}/preview`
                            : null

                        return (
                            <li
                                key={file.id}
                                className="border p-4 rounded-lg shadow-lg bg-gray-800"
                            >
                                <h2 className="text-white">{file.name}</h2>

                                {embedVideoURL ? (
                                    <iframe
                                        src={embedVideoURL}
                                        width="100%"
                                        height="720px"
                                        allow="autoplay"
                                        className="rounded-lg mt-2"
                                    ></iframe>
                                ) : (
                                    <p className="text-red-500">
                                        Video cannot be played
                                    </p>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    )
}
