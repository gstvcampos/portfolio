import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from '../db/Icons'
import Clock from './Clock'

export default function Header() {
  return (
    <header className="flex h-9 items-center justify-between bg-bar-1">
      <span className="mx-5">Atividades</span>
      <Clock />
      <div className="mx-5 flex h-4 gap-3">
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
