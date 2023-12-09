import Header from '@/components/Header'
import { MailIcon, ResumeIcon } from '@/components/Icons'
import LinkDefault from '@/components/LinkDefault'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="h-full w-full bg-content-1 md:h-auto lg:max-w-4xl">
      <Header innerText={'../perfil'} />
      <section className="flex h-[calc(100%-48px)] flex-col gap-4 overflow-auto p-4 md:flex-row">
        <div>
          <Image
            className="m-auto"
            priority={true}
            src="/photo.png"
            width={250}
            height={250}
            alt={'Imagem do autor'}
          />
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:flex-col">
            <LinkDefault innerText="Currículo" href="/">
              <ResumeIcon />
            </LinkDefault>
            <LinkDefault innerText="Email" href="/">
              <MailIcon />
            </LinkDefault>
          </div>
        </div>
        <div className="h-full w-full bg-content-2 p-4">
          <h2 className="font-segoe-bold text-2xl">Ola, eu sou Gustavo</h2>
          <p className="text-text-3">desenvolvedor web fullstack</p>
          <p className="m-2">
            sou um desenvolvedor fullstack apaixonado por tecnologia. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais.
          </p>
          <h3 className="font-segoe-bold text-text-2">Alguns fatos</h3>
          <ul className="m-2">
            <li>Meu nome completo é Gustavo Campos Rodrigues</li>
            <li>Eu nasci em 1995</li>
            <li>
              Uma palavre para descrever minha personalidade: Introvertido
            </li>
          </ul>
          <h3 className="font-segoe-bold text-text-2">Alguns curiosidades</h3>
          <ul className="m-2">
            <li>sou vascaino</li>
            <li>sou vascaino</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
