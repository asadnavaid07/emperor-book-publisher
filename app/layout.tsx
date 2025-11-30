import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Amazon Author Partners | Book Publishing & Marketing Services",
  description:
    "From ghostwriting to global distribution—we help authors craft, polish, and publish their books with confidence and reach readers worldwide.",
  keywords: "book publishing, ghostwriting, book editing, self-publishing, book marketing, author services",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_merriweather.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
