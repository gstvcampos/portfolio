'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function AppBtn({
  page,
  children,
}: {
  page: string
  children: ReactNode
}) {
  const pathname = usePathname() === page

  return (
    <Link
      href={page}
      className={`relative rounded-xl p-1 ${
        pathname ? 'bg-focus-1' : 'hover:bg-focus-1'
      }`}
    >
      {children}
      {pathname && (
        <span className="absolute bottom-1 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-txt-3"></span>
      )}
    </Link>
  )
}
