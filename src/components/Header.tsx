import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from './Icons'

export default function Header({ innerText }: { innerText: string }) {
  return (
    <header className="flex h-12 justify-between bg-primary p-3 text-title">
      <span className="text-text">{innerText}</span>
      <div className="flex gap-4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gstvcampos/"
          className="hover:text-focus"
        >
          <LinkedinIcon />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/gstvcampos"
          className="hover:text-focus"
        >
          <GitHubIcon />
        </Link>
      </div>
    </header>
  )
}
