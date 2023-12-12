import Image from 'next/image'
import FooterBtn from './FooterBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="m-auto flex justify-center gap-2 bg-bar-2 p-1 pb-1 md:w-fit md:rounded-t-lg">
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
        <button className="rounded-xl p-2 hover:bg-focus">
          <Image
            priority={true}
            src="/apps.svg"
            width={48}
            height={48}
            alt={'icone apps'}
          />
        </button>
      </nav>
    </footer>
  )
}
