import "@/styles/globals.css"
import { Inter } from "next/font/google"
import SideNav from "./components/side-nav"
import { ThemeProvider } from "./components/theme-provider"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Satwika Maddukuri - Cybersecurity Graduate Student",
  description: "Personal portfolio of Satwika Maddukuri, focusing on cybersecurity and technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <SideNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'