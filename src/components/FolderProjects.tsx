'use client'

import { CodeIcon, DocumentIcon } from '@/db/Icons'
import { useState } from 'react'
import ProjectContainer from './ProjectContainer'

export default function FolderProjects() {
  const [category, setCategory] = useState('')
  return (
    <div className="flex h-full min-w-0 flex-col md:flex-row">
      <div className="hidden flex-shrink-0 flex-col gap-1 bg-content-1 px-2 py-4 text-center md:flex">
        <button
          onClick={() => setCategory('')}
          className="min-w-[170px] rounded-md p-2 hover:bg-focus-1"
        >
          <span className="flex items-center">
            <span className="mx-2">
              <DocumentIcon />
            </span>
            <span>Todos projetos</span>
          </span>
        </button>
        <button
          onClick={() => setCategory('front-end')}
          className="min-w-[170px] rounded-md p-2 hover:bg-focus-1"
        >
          <span className="flex items-center">
            <span className="mx-2">
              <CodeIcon />
            </span>
            <span>Front End</span>
          </span>
        </button>
        <button
          onClick={() => setCategory('back-end')}
          className="min-w-[170px] rounded-md p-2 hover:bg-focus-1"
        >
          <span className="flex items-center">
            <span className="mx-2">
              <CodeIcon />
            </span>
            <span>Back End</span>
          </span>
        </button>
        <button
          onClick={() => setCategory('full-stack')}
          className="min-w-[170px] rounded-md p-2 hover:bg-focus-1"
        >
          <span className="flex items-center">
            <span className="mx-2">
              <CodeIcon />
            </span>
            <span>Full Stack</span>
          </span>
        </button>
      </div>
      <ProjectContainer category={category} />
    </div>
  )
}
