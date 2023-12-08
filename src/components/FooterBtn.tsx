'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function FooterBtn({
  page,
  children,
}: {
  page: string
  children: ReactNode
}) {
  const pathname = usePathname() === page
  const current = 'inline-flex h-20 rounded-xl bg-black relative'
  const comun = 'inline-flex h-20 hover:bg-black rounded-xl relative'

  return (
    <Link href={page} className={pathname ? current : comun}>
      <span className="mb-2">{children}</span>
      {pathname && (
        <span className="bg-purple absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"></span>
      )}
    </Link>
  )
}
