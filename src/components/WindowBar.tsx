import { CloseIcon, MaximizeIcon, MinimizeIcon } from '@/db/Icons'

export default function WindowBar({ innerText }: { innerText: string }) {
  return (
    <div className="flex h-10 items-center justify-between border-b-[1px]">
      <span></span>
      <h1>{innerText}</h1>
      <div className="flex h-full gap-3 p-2">
        <button className="rounded-full bg-focus p-1">
          <MinimizeIcon />
        </button>
        <button className="rounded-full bg-focus p-1">
          <MaximizeIcon />
        </button>
        <button className="rounded-full bg-focus p-1">
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
