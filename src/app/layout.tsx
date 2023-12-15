import Dock from '@/components/Container/Dock'
import TopBar from '@/components/Container/TopBar'
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
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={
          'relative h-screen overflow-hidden font-segoe text-txt-1 antialiased'
        }
      >
        <TopBar />
        <div className="relative flex h-[calc(100%-24px)] items-center justify-center">
          {children}
        </div>
        <Dock />
        <SpeedInsights />
      </body>
    </html>
  )
}
