'use client'

import { projects } from '@/db/projects'
import { useState } from 'react'
import { CloseFolderIcon, OpendedFolderIcon } from './Icons'
import ProjectContainer from './ProjectContainer'

export default function SelectBtns() {
  const [selectedId, setSelectedId] = useState(0)

  return (
    <>
      <ul className="mb-6 flex flex-wrap md:flex-col">
        {projects.map((project) => (
          <li
            key={project.id}
            className={selectedId === project.id ? 'bg-content-2' : ''}
          >
            <button
              onClick={() => setSelectedId(project.id)}
              className="flex min-w-[160px] items-center gap-2 p-2"
            >
              <span
                className={
                  selectedId === project.id ? 'hidden' : 'inline-flex h-8'
                }
              >
                <CloseFolderIcon />
              </span>
              <span
                className={
                  selectedId !== project.id ? 'hidden' : 'inline-flex h-8'
                }
              >
                <OpendedFolderIcon />
              </span>

              <span>{project.name}</span>
            </button>
          </li>
        ))}
      </ul>
      <ProjectContainer id={selectedId} />
    </>
  )
}
