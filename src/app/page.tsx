import Image from 'next/image'
import { CiMail, CiViewList } from 'react-icons/ci'

export default async function Home() {
  return (
    <main className="h-full w-full bg-content-1 md:h-fit lg:max-w-4xl">
      <header className="flex h-12 bg-content-2 p-3">../perfil</header>
      <div className="flex flex-col gap-4 p-4 md:flex-row">
        <div>
          <Image
            className="m-auto"
            priority={true}
            src="/photo.png"
            width={250}
            height={250}
            alt={'Imagem do autor'}
          />

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:flex-col">
            <button className="w-44 border-b-4 border-color-3 bg-content-2 md:w-full">
              <span className="flex gap-4 px-4 py-3">
                <CiViewList size={30} />
                <span>Currículo</span>
              </span>
            </button>
            <button className="w-44 border-b-4 border-color-3 bg-content-2 md:w-full">
              <span className="flex gap-4 px-4 py-3">
                <CiMail size={30} />
                <span>Email</span>
              </span>
            </button>
          </div>
        </div>

        <div className="h-full w-full bg-content-2 p-4">
          <h2 className="text-2xl">Ola, eu sou Gustavo</h2>
          <p className="mb-6 text-color-3">desenvolvedor web fullstack</p>
          <p className="mb-6">
            sou um desenvolvedor fullstack apaixonado por tecnologia. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais. Estou
            sempre aberto a novas oportunidades e desafios.
          </p>
          <h3 className="text-xl">Alguns fatos</h3>
          <ul className="mb-6">
            <li>Meu nome completo é Gustavo Campos Rodrigues</li>
            <li>Eu nasci em 1995</li>
            <li>
              Uma palavre para descrever minha personalidade: Introvertido
            </li>
          </ul>
          <h3 className="text-xl">Alguns curiosidades</h3>
          <ul className="mb-6">
            <li>sou vascaino</li>
            <li>sou vascaino</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
