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
  const current = 'relative rounded-xl bg-focus p-2'
  const comun = 'relative rounded-xl hover:bg-focus p-2'

  return (
    <Link href={page} className={pathname ? current : comun}>
      <div className="h-14">{children}</div>
      {pathname && (
        <span className="bg-text-1 absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"></span>
      )}
    </Link>
  )
}
