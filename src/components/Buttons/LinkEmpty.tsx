import Link from 'next/link'

interface LinkProps {
  href: string
  icon: JSX.Element
}

export default function LinkEmpty({ href, icon }: LinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="flex rounded-lg px-4 py-2 hover:bg-content-2 hover:bg-opacity-40"
    >
      <span className="flex items-center gap-4">{icon}</span>
    </Link>
  )
}
