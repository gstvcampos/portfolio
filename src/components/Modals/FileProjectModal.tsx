import { Project } from '@/app/projetos/page'
import { GitHubIcon, LinkedinIcon, MailIcon, ResumeIcon } from '@/db/Icons'
import Link from 'next/link'

export default function FileProjectModal({ project }: { project: Project }) {
  return (
    <div className="absolute bottom-20 z-10">
      <div className="w-56 rounded-t-xl border-x-[1px] border-t-[1px] bg-content-2">
        <div className="flex flex-col px-2 pt-2">
          <h2>{project.name}</h2>
          <p>{project.description}</p>

          {project.deploy && (
            <Link
              target="_blank"
              href={project.deploy}
              className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
            >
              <span className="flex items-center gap-4">
                <LinkedinIcon className="h-11 w-11" />
                Deploy
              </span>
            </Link>
          )}

          <Link
            target="_blank"
            href="https://github.com/gstvcampos"
            className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
          >
            <span className="flex items-center gap-4">
              <GitHubIcon className="h-11 w-11" />
              GitHub
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1jrGJ9Cqm193IuKJvPNoTZ3wLIg8yROfw/view?usp=drive_link"
            className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
          >
            <span className="flex items-center gap-4">
              <ResumeIcon className="h-11 w-11" />
              Curriculo
            </span>
          </Link>
          <Link
            target="_blank"
            href="mailto:gustavo.bmc76@gmail.com"
            className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
          >
            <span className="flex items-center gap-4">
              <MailIcon className="h-11 w-11" />
              Email
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
