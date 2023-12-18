import { DocumentIcon } from '@/db/Icons'
import Link from 'next/link'

export default function ProjectLink({
  href,
  name,
}: {
  href: string
  name: string
}) {
  return (
    <Link href={href}>
      <span className="flex min-w-[170px] items-center p-2 hover:bg-focus-1">
        <span className="mx-2">
          <DocumentIcon />
        </span>
        <span>{name}</span>
      </span>
    </Link>
  )
}
