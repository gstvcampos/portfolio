import { DocumentIcon } from '@/db/Icons'
import { useState } from 'react'

export default function Btn() {
  const [category, setCategory] = useState('')
  return (
    <button
      onClick={() => setCategory('')}
      className="min-w-[170px] rounded-md bg-content-2 p-2 hover:bg-focus-1"
    >
      <span className="flex items-center">
        <span className="mx-2">
          <DocumentIcon />
        </span>
        <span>Documentos</span>
      </span>
    </button>
  )
}
