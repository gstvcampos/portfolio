import {
  ProfileIcon,
  ProjectsIcon,
  SkillsIcon,
  ViewMoreIcon,
} from '../db/Icons'
import FooterBtn from './FooterBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="m-auto flex justify-center gap-2 bg-primary bg-opacity-70 p-1 pb-1 md:w-fit md:rounded-t-lg">
        <FooterBtn page="/">
          <ProfileIcon />
        </FooterBtn>
        <FooterBtn page="/tecnologias">
          <SkillsIcon />
        </FooterBtn>
        <FooterBtn page="/projetos">
          <ProjectsIcon />
        </FooterBtn>
        <FooterBtn page="/">
          <ViewMoreIcon />
        </FooterBtn>
      </nav>
    </footer>
  )
}
