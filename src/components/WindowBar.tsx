'use client'

import { CloseIcon, MaximizeIcon, MinimizeIcon } from '@/db/Icons'
import Link from 'next/link'
import goFullScreen from './goFullScreen'

export default function WindowBar({
  innerText,
  elementId,
}: {
  innerText: string
  elementId: string
}) {
  return (
    <div className="flex h-10 items-center justify-between bg-bar-2">
      <span></span>
      <h1>{innerText}</h1>
      <div className="flex h-full gap-3 p-2">
        <Link
          className="bg-focus-1 rounded-full p-1 hover:bg-content-1"
          href={'/desktop'}
        >
          <MinimizeIcon />
        </Link>
        <button
          className="bg-focus-1 rounded-full p-1 hover:bg-content-1"
          onClick={() => goFullScreen({ elementId })}
        >
          <MaximizeIcon />
        </button>
        <Link
          className="bg-focus-1 rounded-full p-1 hover:bg-content-1"
          href={'/desktop'}
        >
          <CloseIcon />
        </Link>
      </div>
    </div>
  )
}
