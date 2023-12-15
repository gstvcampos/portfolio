import Image from 'next/image'
import FooterBtn from './FooterBtn'
import ModalBtn from './ModalBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-1 w-full">
      <nav className="m-auto flex w-fit gap-1 rounded-lg bg-bar-2 p-1">
        <FooterBtn page="/">
          <Image
            priority={true}
            src="/profileIcon.svg"
            width={48}
            height={48}
            alt={'icone profile'}
          />
        </FooterBtn>
        <FooterBtn page="/tecnologias">
          <Image
            priority={true}
            src="/skillsIcon.svg"
            width={48}
            height={48}
            alt={'icone habilidades'}
          />
        </FooterBtn>
        <FooterBtn page="/projetos">
          <Image
            priority={true}
            src="/projectsIcon.svg"
            width={48}
            height={48}
            alt={'icone projetos'}
          />
        </FooterBtn>
        <ModalBtn />
      </nav>
    </footer>
  )
}
