import { Project } from '@/app/projetos/page'
import { GitHubIcon, LinkedinIcon } from '@/db/Icons'
import Link from 'next/link'

export default function FileProjectModal({ project }: { project: Project }) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="max-w-[700px] rounded-lg bg-content-2 p-4">
        <div className="flex flex-col px-2 pt-2">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="flex">
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
              href={project.main}
              className="flex rounded-lg px-4 py-2 hover:bg-focus-1"
            >
              <span className="flex items-center gap-4">
                <GitHubIcon className="h-11 w-11" />
                Branch
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
