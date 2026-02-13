import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Emperor Book Publisher | Book Publishing & Marketing Services",
  description:
    "From ghostwriting to global distribution—we help authors craft, polish, and publish their books with confidence and reach readers worldwide.",
  keywords: "book publishing, ghostwriting, book editing, self-publishing, book marketing, author services",
  generator: "v0.app",
  verification: {
    google: "VCsOfrtjzW0AJrRFPOx5Sg3nSNRS1GVP1FYT9YhQ_O0",
  },
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
      <body className={`antialiased ${plusJakartaSans.variable} ${outfit.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
