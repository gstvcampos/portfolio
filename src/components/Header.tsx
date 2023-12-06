import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from './Icons'

export default function Header({ innerText }: { innerText: string }) {
  return (
    <header className="flex h-12 justify-between bg-content-2 p-3">
      <span>{innerText}</span>
      <div className="flex gap-4">
        <Link target="_black" href="https://www.linkedin.com/in/gstvcampos/">
          <LinkedinIcon />
        </Link>
        <Link target="_black" href="https://github.com/gstvcampos">
          <GitHubIcon />
        </Link>
      </div>
    </header>
  )
}
