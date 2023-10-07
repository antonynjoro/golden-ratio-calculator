import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Ratio Calculator',
  description: 'Golden Ratio Calculator - A simple and intuitive tool to calculate and visualize the golden ratio for any given number. Ideal for designers, artists, and enthusiasts seeking the harmony of the golden proportion.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="h-screen bg-zinc-50">{children}</body>
    </html>
  )
}
