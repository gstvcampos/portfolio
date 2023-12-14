'use client'

import { GitHubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '@/db/Icons'
import { useModalClose } from '@/hooks/useModalClose'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function ModalBtn() {
  const [modalOpen, setModalOpen] = useState(false)
  const buttonRef = useRef(null)

  const handleButtonClick = () => {
    setModalOpen(!modalOpen)
  }

  const modalRef = useModalClose('Escape', () => setModalOpen(false), buttonRef)

  return (
    <>
      <button
        ref={buttonRef}
        className="rounded-xl p-2 hover:bg-focus-1"
        onClick={handleButtonClick}
      >
        <Image
          priority={true}
          src="/apps.svg"
          width={48}
          height={48}
          alt={'icone apps'}
        />
      </button>
      {modalOpen ? (
        <div className="absolute bottom-20 z-10" ref={modalRef}>
          <div className="w-64 rounded-t-xl border-x-[1px] border-t-[1px] bg-content-2">
            <div className="flex flex-col px-2 pt-2">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/gstvcampos/"
                className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
              >
                <span className="flex h-8 items-center gap-4">
                  <LinkedinIcon />
                  Linkedin
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/gstvcampos"
                className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
              >
                <span className="flex h-8 items-center gap-4">
                  <GitHubIcon />
                  GitHub
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1jrGJ9Cqm193IuKJvPNoTZ3wLIg8yROfw/view?usp=drive_link"
                className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
              >
                <span className="flex h-8 items-center gap-4">
                  <ResumeIcon />
                  Curriculo
                </span>
              </Link>
              <Link
                target="_blank"
                href="mailto:gustavo.bmc76@gmail.com"
                className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
              >
                <span className="flex h-8 items-center gap-4">
                  <MailIcon />
                  Email
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
