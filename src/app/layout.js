import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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
  description: "Money Machine X is an advanced automated trading algorithm for MetaTrader 5. Optimize performance, reduce risk, and trade like a pro.",
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
