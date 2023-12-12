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
      className="bg-content hover:text-secondary min-w-[150px] hover:bg-focus md:w-full"
    >
      <span className="flex items-center border-b-4 hover:border-focus">
        <span className="border-r-[1px] px-3 py-1">
          <span className="flex w-6">{children}</span>
        </span>
        <span className="px-4 py-2">{innerText}</span>
      </span>
    </Link>
  )
}
