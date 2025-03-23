import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET
const KEY_PATH = path.join(
    process.cwd(),
    'src/app/api/google-drive/money-machine-x-api.json',
)

const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
})

const drive = google.drive({ version: 'v3', auth })
const FOLDER_ID = '1pjP-FNL-yi8OisKONWtws8wKapH6ObNQ'

export async function GET(req) {
    try {
        // Get token from cookies
        const token = req.cookies.get('authToken')?.value

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Verify JWT
        try {
            jwt.verify(token, SECRET_KEY)
        } catch (err) {
            return NextResponse.json(
                { error: 'Invalid token' },
                { status: 403 },
            )
        }

        // Fetch Google Drive files
        const res = await drive.files.list({
            q: `'${FOLDER_ID}' in parents and trashed=false`,
            fields: 'files(id, name, webViewLink, mimeType)',
            
        })
        // console.log("res", res)

        return NextResponse.json({ files: res.data.files }, { status: 200 })
    } catch (error) {
        console.error('Error fetching files:', error)
        return NextResponse.json(
            { error: 'Failed to fetch files' },
            { status: 500 },
        )
    }
}
