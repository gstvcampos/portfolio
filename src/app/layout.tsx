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
      <body className={'h-screen overflow-hidden font-segoe antialiased'}>
        <Header />
        <div className="flex h-[calc(100%-116px)] items-center justify-center overflow-hidden">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
