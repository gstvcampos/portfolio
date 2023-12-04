'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function NavBtn({
  page,
  children,
}: {
  page: string
  children: ReactNode
}) {
  const pathname = usePathname() === page
  const current = 'bg-content-2'
  const defalt = ''

  return (
    <div className={pathname ? current : defalt}>
      <Link href={page} className="inline-flex h-24">
        {children}
      </Link>
    </div>
  )
}
