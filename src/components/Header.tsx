import NavBtn from './NavBtn'

export default function Header() {
  return (
    <header className="border-b border-color-3 bg-content-2">
      <nav className="flex text-center">
        <NavBtn page="/" innerText="perfil" />
        <NavBtn page="/habilidades" innerText="habilidades" />
        <NavBtn page="/projetos" innerText="projetos" />
      </nav>
    </header>
  )
}
