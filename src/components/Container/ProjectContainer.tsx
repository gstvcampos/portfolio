import { BranchIcon, LiveIcon } from '@/db/Icons'
import { projects } from '@/db/projects'
import Link from 'next/link'

export default function ProjectContainer({ id }: { id: string }) {
  return (
    <>
      {projects.map(
        (project) =>
          project.id === id && (
            <div
              key={project.id}
              className="px-4 pb-20 pt-8 text-justify md:pb-0"
            >
              <div className="overflow-auto bg-content-2">
                <div className="flex flex-col gap-8">
                  <h3 className="text-lg">## {project.name}</h3>
                  <div className="flex flex-col gap-3">
                    {project.description.split('\n').map((paragraph, index) => {
                      return <p key={index}>- {paragraph}</p>
                    })}
                  </div>
                  <div className="flex flex-wrap gap-4">
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
                        className="inline-block rounded-md border-b-2 bg-bar-2 hover:bg-focus-1"
                      >
                        <span className="flex items-center">
                          <span className="border-r-[1px] px-2">
                            <LiveIcon />
                          </span>
                          <span className="px-4 py-1">live</span>
                        </span>
                      </Link>
                    )}
                    <Link
                      target="_blank"
                      href={project.main}
                      className="inline-block rounded-md border-b-2 bg-bar-2 hover:bg-focus-1"
                    >
                      <span className="flex items-center">
                        <span className="border-r-[1px] px-2">
                          <BranchIcon />
                        </span>
                        <span className="px-4 py-1">branch</span>
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
