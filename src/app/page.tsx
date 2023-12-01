import photo from '@/assets/photo.png'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="flex h-full flex-col gap-4 bg-content-1 p-4 md:flex-row">
      <div className="self-center md:self-start">
        <Image
          priority={true}
          src={photo}
          width={250}
          height={250}
          alt={'Imagem do author'}
        />
        <button>Curriculo</button>
        <button>Email</button>
      </div>

      <div className="bg-primary w-full flex-grow flex-col overflow-x-auto bg-content-2 p-4">
        <h2 className="text-2xl">Ola, eu sou Gustavo</h2>
        <p className="text-color-3 mb-6">desenvolvedor web fullstack</p>
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
          <li>sou vascaino</li>
          <li>sou vascaino</li>
          <li>sou vascaino</li>
        </ul>
      </div>
    </main>
  )
}
