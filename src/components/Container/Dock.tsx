import Image from 'next/image'
import AppBtn from '../Buttons/AppBtn'
import AppViewMoreBtn from '../Buttons/AppViewMoreBtn'

export default function Dock() {
  return (
    <footer className="absolute bottom-1 w-full">
      <nav className="m-auto flex w-fit gap-1 rounded-lg border-[1px] border-txt-2 bg-content-2 bg-opacity-60 p-1">
        <AppBtn page="/">
          <Image
            src="/userHomeIcon.png"
            alt="icone user home"
            width={48}
            height={48}
          />
        </AppBtn>
        <AppBtn page="/tecnologias">
          <Image
            src="/bashIcon.png"
            alt="icone projetos"
            width={48}
            height={48}
          />
        </AppBtn>
        <AppBtn page="/projetos/default">
          <Image
            src="/folderIcon.png"
            alt="icone projetos"
            width={48}
            height={48}
          />{' '}
        </AppBtn>
        <AppViewMoreBtn />
      </nav>
    </footer>
  )
}
