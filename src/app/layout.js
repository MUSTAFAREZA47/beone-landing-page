import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Money Machine X",
  description: "By Be One Percent",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="dark">
          <body
              className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
          >
              {children}
          </body>
      </html>
  )
}
