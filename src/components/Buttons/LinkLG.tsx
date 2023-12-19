import Link from 'next/link'

interface LinkButtonProps {
  href: string
  icon: JSX.Element
  label: string
}

export default function LinkLG({ href, icon, label }: LinkButtonProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="mx-2 my-4 inline-block min-w-[150px] rounded-md border-b-2 bg-bar-2 hover:bg-focus-1 md:mx-0 md:flex"
    >
      <span className="flex items-center">
        <span className="border-r-[1px] px-3">{icon}</span>
        <span className="px-4 py-2">{label}</span>
      </span>
    </Link>
  )
}
