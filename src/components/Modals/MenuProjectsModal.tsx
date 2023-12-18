import { MutableRefObject } from 'react'
import MenuProjects from '../MenuProjects'

export default function MenuProjectsModal({
  modalRef,
}: {
  modalRef: MutableRefObject<HTMLDivElement | null>
}) {
  return (
    <div className="absolute left-1 top-8 z-10 " ref={modalRef}>
      <div className="bg-content-1">
        <MenuProjects />
      </div>
    </div>
  )
}
