import FooterBtn from './FooterBtn'
import { ProfileIcon, ProjectsIcon, SkillsIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="bg-gray-1 m-auto flex justify-center gap-2 p-2 md:mb-2 md:w-fit md:rounded-md md:bg-opacity-70 md:p-1">
        <FooterBtn page="/">
          <ProfileIcon />
        </FooterBtn>
        <FooterBtn page="/tecnologias">
          <SkillsIcon />
        </FooterBtn>
        <FooterBtn page="/projetos">
          <ProjectsIcon />
        </FooterBtn>
      </nav>
    </footer>
  )
}
