import { Cormorant } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Southwest Liquor Store | Baltimore, MD",
  description:
    "Premium spirits, wine, and beer in Baltimore. Your one-stop shop for quality beverages and financial services.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
