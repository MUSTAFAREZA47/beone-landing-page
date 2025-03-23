'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Premium() {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetch('/api/google-drive', {
            credentials: 'include', // Ensures cookies are sent with the request
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    router.push('/login') // Redirect if unauthorized
                    return
                }
                return res.json()
            })
            .then((data) => {
                // console.log("data", data)
                if (data?.files) {
                    setFiles(data.files)
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading premium content...</p>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Premium Content</h1>
            <ul className="mt-4">
                {files.map((file) => (
                    <li key={file.id} className="mt-2">
                        <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            {file.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
