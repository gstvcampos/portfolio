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
  const current = 'm-2 inline-flex h-20 overflow-auto rounded-lg bg-content-2'
  const comun =
    'inline-flex h-20 m-2 overflow-auto hover:bg-content-2 rounded-lg'

  return (
    <Link href={page} className={pathname ? current : comun}>
      {children}
    </Link>
  )
}
