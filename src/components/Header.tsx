import EncryptBtn from './EncryptBtn'

export default function Header() {
  const name = '{ gustavoCampos? }'
  return (
    <header>
      <div className="mx-auto flex max-w-screen-lg items-center justify-between">
        <h2 className="text-plink p-5">{name}</h2>
        <nav className="flex gap-5 p-5">
          <EncryptBtn toElement="#profile" innerText="perfil" />
          <EncryptBtn toElement="#projects" innerText="projetos" />
          <EncryptBtn toElement="#contact" innerText="contato" />
        </nav>
      </div>
    </header>
  )
}
