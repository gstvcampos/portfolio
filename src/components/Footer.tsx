import { ProfileIcon, ProjectsIcon, SkillsIcon } from './Icons'
import NavBtn from './NavBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="bg-gray m-auto flex justify-center gap-2 p-2 md:mb-1 md:w-fit md:rounded-md md:bg-opacity-50">
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
