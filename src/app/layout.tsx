import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'gstvCampos',
  description: 'Portifolio do Gustavo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={
          'relative h-screen overflow-hidden font-segoe text-txt-1 antialiased'
        }
      >
        <Header />
        <div className="relative flex h-[calc(100%-116px)] items-center justify-center">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
