import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const mono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Portifolio do Gustavo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={mono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
