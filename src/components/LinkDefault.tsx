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
      target="_blank"
      href={href}
      className="mx-1 my-3 inline-block min-w-[150px] border-b-4 bg-content-1 hover:bg-txt-3 md:mx-0 md:flex"
    >
      <span className="flex items-center">
        <span className="border-r-[1px] px-3">{children}</span>
        <span className="px-4 py-2">{innerText}</span>
      </span>
    </Link>
  )
}
