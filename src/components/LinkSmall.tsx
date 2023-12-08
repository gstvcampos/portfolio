import Link from 'next/link'

export default function LinkSmall({
  innerText,
  href,
}: {
  innerText: string
  href: string
}) {
  return (
    <Link target="_blank" href={href} className="text-text-2 border-b-2">
      <span className="px-2">{innerText}</span>
    </Link>
  )
}
