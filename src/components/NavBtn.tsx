'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBtn({
  innerText,
  page,
}: {
  innerText: string
  page: string
}) {
  const pathname = usePathname() === page
  const current = 'inline-flex p-4 hover:text-color-2 border-b-2'
  const defalt = 'inline-flex p-4 hover:text-color-2'

  return (
    <div className="me-2">
      <Link href={page} className={pathname ? current : defalt}>
        {innerText}
      </Link>
    </div>
  )
}
