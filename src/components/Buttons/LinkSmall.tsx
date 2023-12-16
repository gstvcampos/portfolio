import Link from 'next/link'

export default function LinkSmall({
  innerText,
  href,
}: {
  innerText: string
  href: string
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="border-b-2 font-segoe-bold hover:text-txt-3"
    >
      <span className="px-2">{innerText}</span>
    </Link>
  )
}