import Footer from '@/components/Footer'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Space_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const mono = Space_Mono({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Portifolio do Gustavo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${mono.className} h-screen overflow-hidden text-color-1 antialiased`}
      >
        <div className="flex h-[calc(100%-96px)] items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
