import { GitHubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '@/db/Icons'
import Link from 'next/link'
import { MutableRefObject } from 'react'

export default function AppModal({
  modalRef,
}: {
  modalRef: MutableRefObject<HTMLDivElement | null>
}) {
  return (
    <div
      className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2"
      ref={modalRef}
    >
      <div className="w-40 rounded-xl border-[1px] bg-content-2 bg-opacity-60">
        <div className="flex w-fit flex-wrap">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/gstvcampos/"
            className="flex rounded-lg px-4 py-2 hover:bg-content-2 hover:bg-opacity-40"
          >
            <span className="flex items-center gap-4">
              <LinkedinIcon className="h-11 w-11" />
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/gstvcampos"
            className="flex rounded-lg px-4 py-2 hover:bg-content-2 hover:bg-opacity-40"
          >
            <span className="flex items-center gap-4">
              <GitHubIcon className="h-11 w-11" />
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1jrGJ9Cqm193IuKJvPNoTZ3wLIg8yROfw/view?usp=drive_link"
            className="flex rounded-lg px-4 py-2 hover:bg-content-2 hover:bg-opacity-40"
          >
            <span className="flex items-center gap-4">
              <ResumeIcon className="h-11 w-11" />
            </span>
          </Link>
          <Link
            target="_blank"
            href="mailto:gustavo.bmc76@gmail.com"
            className="flex rounded-lg px-4 py-2 hover:bg-content-2 hover:bg-opacity-40"
          >
            <span className="flex items-center gap-4">
              <MailIcon className="h-11 w-11" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
