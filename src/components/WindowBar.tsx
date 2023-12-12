'use client'

import { CloseIcon, MaximizeIcon, MinimizeIcon } from '@/db/Icons'
import Link from 'next/link'

export default function WindowBar({ innerText }: { innerText: string }) {
  interface FullscreenElement extends HTMLElement {
    mozRequestFullScreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void>
    msRequestFullscreen?: () => Promise<void>
  }

  const goFullScreen = () => {
    const docEl = document.documentElement as FullscreenElement
    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullscreen ||
      docEl.msRequestFullscreen

    if (requestFullScreen) {
      requestFullScreen.call(docEl)
    }
  }

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
          onClick={goFullScreen}
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
