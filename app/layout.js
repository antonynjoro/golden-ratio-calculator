import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'
import BuyMeACoffee from './components/BuyMeACoffee'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Ratio Calculator App',
  description: 'Tool to calculate the golden ratio of a number',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <BuyMeACoffee />
      </head>
      <body className="h-screen bg-zinc-50">{children}</body>
    </html>
  )
}
