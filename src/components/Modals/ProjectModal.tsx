import { Project } from '@/app/projetos/page'
import {
  BranchIcon,
  CloseIcon,
  LiveIcon,
  MaximizeIcon,
  MinimizeIcon,
} from '@/db/Icons'
import Link from 'next/link'
import goFullScreen from '../goFullScreen'

export default function ProjectModal({
  project,
  handleCloseModal,
}: {
  project: Project
  handleCloseModal: () => void
}) {
  return (
    <div className="absolute left-6 top-12 z-10 mr-6">
      <div
        id={project.name}
        className="max-w-[700px] overflow-hidden rounded-lg border-[1px] border-txt-2 bg-content-2"
      >
        <div className="flex h-12 items-center justify-between bg-bar-2">
          <span></span>
          <h1 className="font-segoe-bold">{project.name}</h1>
          <div className="mr-3 flex gap-3">
            <button
              className="flex h-6 w-6 rounded-full bg-content-1 p-1 hover:bg-focus-1"
              onClick={handleCloseModal}
            >
              <MinimizeIcon />
            </button>
            <button
              className="flex h-6 w-6 rounded-full bg-content-1 p-1 hover:bg-focus-1"
              onClick={() => goFullScreen({ elementId: project.name })}
            >
              <MaximizeIcon />
            </button>
            <button
              className="flex h-6 w-6 rounded-full bg-content-1 p-1 hover:bg-focus-1"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="flex max-h-[calc(100vh-220px)] flex-col gap-8 overflow-auto bg-content-2 p-4">
          <div className="flex flex-col gap-3">
            {project.description.split('\n').map((paragraph, index) => {
              return <p key={index}># ~ {paragraph}</p>
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <p className="rounded-xl border-2 px-2 text-sm" key={index}>
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
  )
}
