'use client'

import { projects } from '@/db/projects'
import { useState } from 'react'
import { CloseFolderIcon, OpendedFolderIcon } from '../db/Icons'
import ProjectContainer from './ProjectContainer'

export default function FolderProjects() {
  const [selectedId, setSelectedId] = useState(0)

  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <ul className="flex flex-wrap bg-content-1 md:flex-col">
        {projects.map((project) => (
          <li
            key={project.id}
            className={
              selectedId === project.id ? 'bg-content-2' : 'hover:bg-focus-1'
            }
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
      {selectedId > 0 ? (
        <ProjectContainer id={selectedId} />
      ) : (
        <div className="h-[600px] w-full bg-content-2 text-center">
          <h1 className="p-8 text-txt-2">Selecione alguma pasta</h1>
        </div>
      )}
    </div>
  )
}
