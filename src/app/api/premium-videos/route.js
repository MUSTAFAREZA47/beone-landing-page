// /app/api/premium-videos/route.js
import imagekit from '@/lib/imagekit'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const files = await imagekit.listFiles({
            path: '/premium-videos', // adjust this to your folder name
            limit: 100,
        })

        const videos = files
            .filter((file) => file.mime && file.mime.startsWith('video'))
            .map((file) => {
                return {
                    name: file.name,
                    url: `${process.env.IMAGEKIT_URL_ENDPOINT}/${file.filePath}`,
                }
            })

        return NextResponse.json({ videos })
    } catch (error) {
        console.error('Fetch video error:', error)
        return NextResponse.json(
            { message: 'Failed to fetch premium videos' },
            { status: 500 },
        )
    }
}
