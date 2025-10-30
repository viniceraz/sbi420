import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SBI420 - Satoshi Bitcoin Index | Est. 1999",
  description: "The only index tracking your emotions since 1999. Pure degeneracy meets retro aesthetics.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
