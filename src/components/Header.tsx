import NavBtn from './NavBtn'

export default function Header() {
  return (
    <header className="bg-color-2">
      <nav className="mx-1 mt-1 flex justify-start">
        <NavBtn page="/" innerText="perfil" />
        <NavBtn page="/projetos" innerText="projetos" />
        <NavBtn page="/contatos" innerText="contato" />
      </nav>
    </header>
  )
}
