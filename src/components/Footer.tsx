import { ProfileIcon, ProjectsIcon, SkillsIcon } from './Icons'
import NavBtn from './NavBtn'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <nav className="m-auto my-3 flex w-fit justify-center overflow-auto rounded-xl bg-content-1">
        <NavBtn page="/">
          <ProfileIcon />
        </NavBtn>
        <NavBtn page="/habilidades">
          <SkillsIcon />
        </NavBtn>
        <NavBtn page="/projetos">
          <ProjectsIcon />
        </NavBtn>
      </nav>
    </footer>
  )
}
