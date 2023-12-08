import Link from 'next/link'
import { ReactNode } from 'react'

export default function LinkSmall({
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
      className="hover:bg-content-3 text-text-1 bg-content-1 md:w-full"
    >
      <span className="flex items-center border-b-4">
        <span className="border-r-[1px] px-3 py-1">
          <span className="flex w-5">{children}</span>
        </span>
        <span className="px-2 py-2">{innerText}</span>
      </span>
    </Link>
  )
}
