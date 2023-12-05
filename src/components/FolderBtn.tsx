import { CloseFolderIcon, OpendedFolderIcon } from './Icons'

export default function FolderBtn({ name }: { name: string }) {
  return (
    <button className="flex p-1">
      <span className="flex items-center">
        <span className="w-12">
          <CloseFolderIcon />
        </span>
        <span className="hidden w-12">
          <OpendedFolderIcon />
        </span>
        <span className="ml-2">{name}</span>
      </span>
    </button>
  )
}
