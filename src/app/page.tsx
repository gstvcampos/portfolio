import profilePx from '@/assets/profilePx.png'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center md:flex-row">
        <div>
          <Image
            priority={true}
            src={profilePx}
            width={250}
            height={250}
            alt={'Imagem do author'}
          />
        </div>

        <div className="m-4 w-full max-w-screen-sm flex-grow flex-col flex-wrap bg-primary p-4">
          <h1 className="text-2xl">Ola, Eu sou Gustavo</h1>
          <h3 className="text-white">Um desenvolvedor fullstack</h3>
          <p>
            sou um desenvolvedor fullstack apaixonado por tecnologia. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais. Estou
            sempre aberto a novas oportunidades e desafios.
          </p>
        </div>
      </div>
    </main>
  )
}
