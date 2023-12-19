import Link from 'next/link'

interface LinkButtonProps {
  href: string
  icon: JSX.Element
  label: string
}

export default function LinkSM({ href, icon, label }: LinkButtonProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="inline-block rounded-md border-b-2 bg-bar-2 hover:bg-focus-1"
    >
      <span className="flex items-center">
        <span className="border-r-[1px] px-2">{icon}</span>
        <span className="px-4 py-1">{label}</span>
      </span>
    </Link>
  )
}
