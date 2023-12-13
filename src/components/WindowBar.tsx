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
    <div className="flex h-10 items-center justify-between border-b-[1px]">
      <span></span>
      <h1>{innerText}</h1>
      <div className="flex h-full gap-3 p-2">
        <Link
          className="rounded-full bg-focus p-1 hover:bg-content-1"
          href={'/desktop'}
        >
          <MinimizeIcon />
        </Link>
        <button
          className="rounded-full bg-focus p-1 hover:bg-content-1"
          onClick={() => goFullScreen({ elementId })}
        >
          <MaximizeIcon />
        </button>
        <Link
          className="rounded-full bg-focus p-1 hover:bg-content-1"
          href={'/desktop'}
        >
          <CloseIcon />
        </Link>
      </div>
    </div>
  )
}
