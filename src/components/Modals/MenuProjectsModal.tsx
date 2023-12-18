import { projects } from '@/db/projects'
import { MutableRefObject } from 'react'
import ProjectLink from '../Buttons/ProjectLink'

export default function MenuProjectsModal({
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
          <span className="bg-txt-2">Front end</span>
          {projects.map(
            (project) =>
              project.category === 'front-end' && (
                <ProjectLink key={project.id} project={project} />
              ),
          )}
          <span className="bg-txt-2">Back end</span>
          {projects.map(
            (project) =>
              project.category === 'back-end' && (
                <ProjectLink key={project.id} project={project} />
              ),
          )}
          <span className="bg-txt-2">Full stack</span>
          {projects.map(
            (project) =>
              project.category === 'full-stack' && (
                <ProjectLink key={project.id} project={project} />
              ),
          )}
        </div>
      </div>
    </div>
  )
}
