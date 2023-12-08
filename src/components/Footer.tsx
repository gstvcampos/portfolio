import { ProfileIcon, ProjectsIcon, SkillsIcon } from './Icons'
import NavBtn from './NavBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="bg-black flex justify-center">
        <NavBtn page="/">
          <ProfileIcon />
        </NavBtn>
        <NavBtn page="/tecnologias">
          <SkillsIcon />
        </NavBtn>
        <NavBtn page="/projetos">
          <ProjectsIcon />
        </NavBtn>
      </nav>
    </footer>
  )
}
