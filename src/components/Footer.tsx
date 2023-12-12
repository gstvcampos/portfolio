import Image from 'next/image'
import { ViewMoreIcon } from '../db/Icons'
import FooterBtn from './FooterBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="bg-bar-3 m-auto flex justify-center gap-2 p-1 pb-1 md:w-fit md:rounded-t-lg">
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
        <FooterBtn page="/">
          <ViewMoreIcon />
        </FooterBtn>
      </nav>
    </footer>
  )
}
