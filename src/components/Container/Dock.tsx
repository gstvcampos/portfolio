import AppBtn from '../Buttons/AppBtn'
import AppViewMoreBtn from '../Buttons/AppViewMoreBtn'
import CustomImage from '../CustomImage'

export default function Dock() {
  return (
    <footer className="absolute bottom-1 w-full">
      <nav className="m-auto flex w-fit gap-1 rounded-lg border-[1px] border-txt-2 bg-content-2 bg-opacity-60 p-1">
        <AppBtn page="/">
          <CustomImage src="/profileIcon.svg" alt="icone profile" />
        </AppBtn>
        <AppBtn page="/tecnologias">
          <CustomImage src="/skillsIcon.svg" alt="icone habilidades" />
        </AppBtn>
        <AppBtn page="/projetos">
          <CustomImage src="/projectsIcon.svg" alt="icone projetos" />
        </AppBtn>
        <AppViewMoreBtn />
      </nav>
    </footer>
  )
}
