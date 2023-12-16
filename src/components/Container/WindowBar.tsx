'use client'

import { CloseIcon, MaximizeIcon, MinimizeIcon } from '@/db/Icons'
import Link from 'next/link'
import goFullScreen from '../goFullScreen'

export default function WindowBar({
  innerText,
  elementId,
}: {
  innerText: string
  elementId: string
}) {
  return (
    <div className="flex items-center justify-between bg-bar-2">
      <span></span>
      <h1 className="font-segoe-bold">{innerText}</h1>
      <div className="flex items-center gap-2 p-2">
        <Link
          className="rounded-full bg-content-1 p-1 hover:bg-focus-1"
          href={'/desktop'}
        >
          <MinimizeIcon />
        </Link>
        <button
          className="rounded-full bg-content-1 p-1 hover:bg-focus-1"
          onClick={() => goFullScreen({ elementId })}
        >
          <MaximizeIcon />
        </button>
        <Link
          className="rounded-full bg-content-1 p-1 hover:bg-focus-1"
          href={'/desktop'}
        >
          <CloseIcon />
        </Link>
      </div>
    </div>
  )
}
