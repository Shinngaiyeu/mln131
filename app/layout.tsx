import type React from "react"
import type { Metadata } from "next"
import { Inter, Be_Vietnam_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-sans",
  display: "swap"
})

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["latin", "vietnamese"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vietnamese",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Chủ Nghĩa Xã Hội - Tất Yếu Lịch Sử",
  description: "Khám phá lý luận khoa học về chủ nghĩa xã hội như một tất yếu lịch sử",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${beVietnam.variable}`}>
      <body className="font-vietnamese antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
