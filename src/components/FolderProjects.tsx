'use client'

import { useState } from 'react'
import ProjectContainer from './ProjectContainer'

export default function FolderProjects() {
  const [category, setCategory] = useState('')
  return (
    <div className="grid h-full w-full grid-cols-6">
      <div className="flex h-full flex-col gap-5 bg-content-1 p-4">
        <button onClick={() => setCategory('')}>Todos</button>
        <button onClick={() => setCategory('front-end')}>Front End</button>
        <button onClick={() => setCategory('back-end')}>Back End</button>
        <button onClick={() => setCategory('full-stack')}>Full Stack</button>
      </div>
      <ProjectContainer category={category} />
    </div>
  )
}
