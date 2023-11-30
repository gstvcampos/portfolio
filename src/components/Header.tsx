import EncryptBtn from './EncryptBtn'

export default function Header() {
  return (
    <header className="mx-auto flex justify-center">
      <nav className="fixed mt-2 flex">
        <EncryptBtn page="/" innerText="perfil" />
        <EncryptBtn page="projetos" innerText="projetos" />
        <EncryptBtn page="contatos" innerText="contato" />
      </nav>
    </header>
  )
}
