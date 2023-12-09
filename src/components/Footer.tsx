import FooterBtn from './FooterBtn'
import { ProfileIcon, ProjectsIcon, SkillsIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="bg-primary m-auto flex justify-center gap-2 p-2">
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
