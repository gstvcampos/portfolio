import LinkDefault from '@/components/LinkDefault'
import WindowBar from '@/components/WindowBar'
import { MailIcon, ResumeIcon } from '@/db/Icons'
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="h-full w-full overflow-hidden rounded-t-lg bg-bar-2 md:h-auto lg:max-w-4xl">
      <WindowBar innerText="Perfil" />
      <section className="flex h-[calc(100%-48px)] flex-col-reverse overflow-auto md:flex-row">
        <div className="h-full w-full bg-content-2 p-4">
          <h2 className="text-3xl">
            Ola, eu sou o
            <span className="text-txt-3 font-segoe-bold"> Gustavo Campos</span>
          </h2>
          <p className="text-muted">desenvolvedor web fullstack</p>
          <p className="m-2">
            sou um desenvolvedor fullstack apaixonado por tecnologia. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais.
          </p>
          <h3 className="font-segoe-bold text-focus">Alguns fatos</h3>
          <ul className="m-2">
            <li>Meu nome completo é Gustavo Campos Rodrigues</li>
            <li>Eu nasci em 1995</li>
          </ul>
          <h3 className="font-segoe-bold text-focus">Alguns curiosidades</h3>
          <ul className="m-2">
            <li>sou vascaino</li>
            <li>sou vascaino</li>
          </ul>
        </div>
        <div className="px-4 py-2">
          <Image
            className="m-auto"
            priority={true}
            src="/photo.png"
            width={250}
            height={250}
            alt={'Imagem do autor'}
          />
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:flex-col">
            <LinkDefault
              innerText="Currículo"
              href="https://drive.google.com/file/d/1zTjgJNG4zljUYHPk7U1byQd-UCs_QmQN/view?usp=drive_link"
            >
              <ResumeIcon />
            </LinkDefault>
            <LinkDefault
              innerText="Email"
              href="mailto:gustavo.bmc76@gmail.com"
            >
              <MailIcon />
            </LinkDefault>
          </div>
        </div>
      </section>
    </main>
  )
}
