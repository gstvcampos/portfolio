import LinkDefault from '@/components/LinkDefault'
import WindowBar from '@/components/WindowBar'
import { MailIcon, ResumeIcon } from '@/db/Icons'
import Image from 'next/image'

export default async function Home() {
  return (
    <main
      id="home"
      className="flex h-full max-h-full w-full flex-col overflow-hidden md:h-auto md:rounded-t-lg lg:max-w-4xl"
    >
      <WindowBar innerText="Perfil" elementId="home" />
      <section className="h-[calc(100%-40px)] flex-1 overflow-auto">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="bg-content-2 p-4">
            <h2 className="text-3xl">
              Ola, sou
              <span className="font-segoe-bold text-txt-3"> Gustavo!</span>
            </h2>
            <p className="text-txt-2">desenvolvedor web fullstack</p>
            <p className="m-5">
              👋 Bem-vindo ao meu portfólio! Eu sou um desenvolvedor fullstack,
              originalmente do interior do Espírito Santo. Apaixonado por
              tecnologia, sempre estou em busca de novos aprendizados.
            </p>
            <p>
              Eu sou um desenvolvedor fullstack, originalmente do interior do
              Espírito Santo. Apaixonado por tecnologia, sempre estou em busca
              de novos aprendizados.
            </p>
            <p>
              Eu sou um desenvolvedor fullstack, originalmente do interior do
              Espírito Santo. Apaixonado por tecnologia, sempre estou em busca
              de novos aprendizados.
            </p>
            <p className="m-5">
              👨‍💻 Neste espaço, você encontrará projetos que refletem minha
              evolução no universo da programação.
            </p>
          </div>
          <div className="min-w-[200px] bg-content-1 p-4">
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
                href="https://drive.google.com/file/d/19jXlYk8KhZ7I_-YOU4pTGUK5lzSYZv3B/view?usp=drive_link"
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
        </div>
      </section>
    </main>
  )
}
