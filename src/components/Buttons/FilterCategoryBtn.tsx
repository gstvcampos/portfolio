'use client'

import { DocumentIcon } from '@/db/Icons'
import { CategoryContext } from '@/providers/CategoryContext'
import { useContext } from 'react'

export default function FilterCategoryBtn({
  innerText,
  filter,
  className,
}: {
  innerText: string
  filter: string
  className?: string
}) {
  const { setCategory } = useContext(CategoryContext)

  return (
    <button
      onClick={() => setCategory(filter)}
      className={`min-w-[170px]·p-2·hover:bg-focus-1·focus:bg-focus-3 ${className}`}
    >
      <span className="flex items-center">
        <span className="mx-2">
          <DocumentIcon />
        </span>
        <span>{innerText}</span>
      </span>
    </button>
  )
}
