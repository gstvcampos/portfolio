import Link from 'next/link'
import { GitHubIcon, LinkedinIcon } from '../../db/Icons'
import Clock from '../Clock'

export default function TopBar() {
  return (
    <header className="flex h-6 items-center justify-between bg-bar-1">
      <span className="ml-2 h-2 w-7 rounded-md bg-txt-1"></span>
      <Clock />
      <div className="mr-3 flex h-4 gap-2">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gstvcampos/"
          className="hover:text-focus-1"
          aria-label="Linkedin do Gustavo"
        >
          <LinkedinIcon className="h-4 w-4" />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/gstvcampos"
          className="hover:text-focus-1"
          aria-label="Github do Gustavo"
        >
          <GitHubIcon className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
