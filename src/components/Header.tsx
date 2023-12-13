import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from '../db/Icons'
import Clock from './Clock'

export default function Header() {
  return (
    <header className="flex h-9 items-center justify-between bg-bar-1">
      <span className="ml-2 h-2 w-7 rounded-md bg-txt-1"></span>
      <Clock />
      <div className="mx-5 flex h-4 gap-3">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gstvcampos/"
          className="hover:text-focus-1"
        >
          <LinkedinIcon />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/gstvcampos"
          className="hover:text-focus-1"
        >
          <GitHubIcon />
        </Link>
      </div>
    </header>
  )
}
