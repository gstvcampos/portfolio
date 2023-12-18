import { BranchIcon, LiveIcon } from '@/db/Icons'
import { projects } from '@/db/projects'
import Link from 'next/link'

export default function ProjectContainer({ id }: { id: string }) {
  return (
    <>
      {projects.map(
        (project) =>
          project.id === id && (
            <div key={project.id} className="p-4 pb-20 text-justify md:pb-0">
              <div className="gap-8 overflow-auto bg-content-2">
                <div className="flex flex-col gap-8 p-4">
                  <div className="flex flex-col gap-3">
                    {project.description.split('\n').map((paragraph, index) => {
                      return <p key={index}># ~ {paragraph}</p>
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <p
                        className="rounded-xl border-2 px-2 text-sm"
                        key={index}
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.deploy && (
                      <Link
                        target="_blank"
                        href={project.deploy}
                        className="inline-block h-8 w-24 rounded-md bg-txt-1 text-content-2"
                      >
                        <span className="flex h-full items-center gap-2 px-2">
                          <LiveIcon className="h-4 w-4" />
                          live
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      href={project.main}
                      className="inline-block h-8 w-24 rounded-md bg-txt-1 text-content-2"
                    >
                      <span className="flex h-full items-center gap-2 px-2">
                        <BranchIcon className="h-4 w-4" />
                        branch
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ),
      )}
    </>
  )
}
