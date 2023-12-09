import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Portifolio do Gustavo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={
          'h-screen overflow-hidden font-segoe text-text-1 antialiased'
        }
      >
        <div className="flex h-[calc(100%-96px)] items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
