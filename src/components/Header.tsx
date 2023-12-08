import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from './Icons'

export default function Header({ innerText }: { innerText: string }) {
  return (
    <header className="bg-content-3 flex h-12 justify-between p-3">
      <span>{innerText}</span>
      <div className="flex gap-4">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gstvcampos/"
          className="hover:text-text-2"
        >
          <LinkedinIcon />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/gstvcampos"
          className="hover:text-text-2"
        >
          <GitHubIcon />
        </Link>
      </div>
    </header>
  )
}