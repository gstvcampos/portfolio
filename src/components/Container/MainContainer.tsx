import { ReactNode } from 'react'
import WindowBar from './WindowBar'

export default function MainContainer({
  children,
  innerText,
  id,
}: {
  children: ReactNode
  innerText: string
  id: string
}) {
  return (
    <main
      id={id}
      className="flex max-h-full min-h-full min-w-full max-w-full flex-col overflow-hidden md:min-h-0 md:rounded-lg lg:max-h-[calc(100%-16px)] lg:min-w-[900px] lg:max-w-[900px]"
    >
      <WindowBar innerText={innerText} elementId={id} />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto bg-content-2">
        {children}
      </section>
    </main>
  )
}
