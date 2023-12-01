import Footer from '@/components/Footer'
import Header from '@/components/Header'
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
        className={`${mono.className} flex h-screen items-center justify-center bg-bg text-color-1 antialiased`}
      >
        <div className="flex h-full max-w-4xl flex-grow flex-col overflow-hidden md:h-[555px]">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
