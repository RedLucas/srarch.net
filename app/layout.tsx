import { Metadata } from "next/types"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import "./globals.css"

import { Raleway } from "next/font/google"

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "SRA Architect Inc.",
  icons: [
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.className} ${raleway.variable}`}>
      <body>
        <Nav />
        <main className="container p-3">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
