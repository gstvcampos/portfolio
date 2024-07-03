import { GitHubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '@/db/Icons'
import { MutableRefObject } from 'react'
import LinkEmpty from '../Buttons/LinkEmpty'

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
          <LinkEmpty
            href="https://www.linkedin.com/in/gstvcampos/"
            icon={<LinkedinIcon className="h-11 w-11" />}
          />
          <LinkEmpty
            href="https://github.com/gstvcampos"
            icon={<GitHubIcon className="h-11 w-11" />}
          />
          <LinkEmpty
            href="https://drive.google.com/file/d/1idIx-BNXVJsFtqM9s3j_EBZ6W-8gabrJ/view?usp=sharing"
            icon={<ResumeIcon className="h-11 w-11" />}
          />
          <LinkEmpty
            href="mailto:gustavo.bmc76@gmail.com"
            icon={<MailIcon className="h-11 w-11" />}
          />
        </div>
      </div>
    </div>
  )
}
