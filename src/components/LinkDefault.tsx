import Link from 'next/link'
import { ReactNode } from 'react'

export default function LinkDefault({
  innerText,
  href,
  children,
}: {
  innerText: string
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="min-w-[150px] border-b-4 border-color-3 bg-content-2 md:w-full"
    >
      <span className="flex items-center">
        <span className="border-r-[1px] border-color-3 px-3 py-1">
          <span className="flex w-6">{children}</span>
        </span>
        <span className="px-4 py-3">{innerText}</span>
      </span>
    </Link>
  )
}
