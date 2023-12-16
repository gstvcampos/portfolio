import { Project } from '@/app/projetos/page'
import {
  BranchIcon,
  CloseIcon,
  LiveIcon,
  MaximizeIcon,
  MinimizeIcon,
} from '@/db/Icons'
import Link from 'next/link'
import { MutableRefObject } from 'react'
import goFullScreen from '../goFullScreen'

export default function FileProjectModal({
  project,
  modalRef,
}: {
  project: Project
  modalRef: MutableRefObject<HTMLDivElement | null>
}) {
  return (
    <div className="absolute left-6 top-10 z-10 mr-6" ref={modalRef}>
      <div
        id={project.name}
        className="max-w-[700px] overflow-auto rounded-lg bg-content-2"
      >
        <div className="flex h-9 items-center justify-between bg-bar-2">
          <span></span>
          <h1 className="font-segoe-bold">{project.name}</h1>
          <div className="mr-3 flex gap-3">
            <Link
              className="flex h-6 w-6 rounded-full bg-content-1 p-[6px] hover:bg-focus-1"
              href={'/desktop'}
            >
              <MinimizeIcon />
            </Link>
            <button
              className="flex h-6 w-6 rounded-full bg-content-1 p-1 hover:bg-focus-1"
              onClick={() => goFullScreen({ elementId: project.name })}
            >
              <MaximizeIcon />
            </button>

            <Link
              className="flex h-6 w-6 rounded-full bg-content-1 p-1 hover:bg-focus-1"
              href={'/desktop'}
            >
              <CloseIcon />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-content-2 p-4">
          <div className="flex flex-col gap-3">
            {project.description.split('\n').map((paragraph, index) => {
              return <p key={index}># ~ {paragraph}</p>
            })}
          </div>
          <div className="flex gap-2">
            {project.technologies.map((tech, index) => (
              <p className="rounded-xl border-2 px-2 text-sm" key={index}>
                {tech}
              </p>
            ))}
          </div>
          <div className="flex gap-4">
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
