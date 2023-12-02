import CssIcon from '@/assets/icons/CssIcon'

export default function Habilidades() {
  return (
    <main className="p-4">
      <div className="h-full w-full bg-content-2 p-4">
        <div>
          <CssIcon />
        </div>
        <h2 className="text-2xl">Ola, eu sou Gustavo</h2>
        <p className="mb-6 text-color-3">desenvolvedor web fullstack</p>
        <p className="mb-6">
          sou um desenvolvedor fullstack apaixonado por tecnologia. Meu objetivo
          é criar interfaces de usuário bonitas e funcionais. Estou sempre
          aberto a novas oportunidades e desafios.
        </p>
        <h3 className="text-xl">Alguns fatos</h3>
        <ul className="mb-6">
          <li>Meu nome completo é Gustavo Campos Rodrigues</li>
          <li>Eu nasci em 1995</li>
          <li>Uma palavre para descrever minha personalidade: Introvertido</li>
        </ul>
        <h3 className="text-xl">Alguns curiosidades</h3>
        <ul className="mb-6">
          <li>sou vascaino</li>
          <li>sou vascaino</li>
        </ul>
      </div>
    </main>
  )
}
