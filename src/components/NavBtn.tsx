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
  const pathname = usePathname()
  const general = 'w-32 border-x-[1px] border-b-0 p-1'
  const current = 'w-32 bg-bg'

  return (
    <div className={pathname === page ? current : general}>
      <Link href={page} className="ml-2">
        {innerText}
      </Link>
    </div>
  )
}
