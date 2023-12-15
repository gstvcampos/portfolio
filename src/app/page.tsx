import LinkDefault from '@/components/LinkDefault'
import WindowBar from '@/components/WindowBar'
import { MailIcon, ResumeIcon } from '@/db/Icons'
import Image from 'next/image'

export default async function Home() {
  return (
    <main
      id="home"
      className="flex max-h-full min-h-full min-w-full max-w-full flex-col overflow-hidden md:min-h-0 lg:max-h-[calc(100%-16px)] lg:min-w-[900px] lg:max-w-[900px]"
    >
      <WindowBar innerText="Perfil" elementId="home" />
      <section className="flex-1 overflow-auto bg-content-2">
        <div className="flex h-full min-w-0 flex-col md:flex-row">
          <div className="min-w-0 flex-shrink-0 bg-content-1 p-4 text-center">
            <Image
              className="inline-block"
              priority={true}
              src="/photo.png"
              width={200}
              height={200}
              alt={'Imagem do autor'}
            />
            <div className="">
              <LinkDefault
                innerText="Currículo"
                href="https://drive.google.com/file/d/1jrGJ9Cqm193IuKJvPNoTZ3wLIg8yROfw/view?usp=drive_link"
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
          <div className="p-4 text-justify">
            <h2 className="px-3 text-3xl">
              Ola, eu sou o
              <span className="font-segoe-bold text-txt-3"> Gustavo!</span>
            </h2>
            <p className="px-3 text-txt-2">desenvolvedor web fullstack</p>
            <p className="m-3">👋 Seja bem-vindo ao meu portfólio!</p>
            <p className="m-3">
              👨‍💻 Eu sou um desenvolvedor fullstack apaixonado por tecnologia e
              sempre em busca de novos aprendizados.
            </p>
            <p className="m-3">
              🚀 Aqui, você vai encontrar uma diversidade de projetos que
              refletem a minha trajetória e crescimento no fascinante mundo da
              programação.
            </p>
            <p className="m-3">
              💡 Acredito que a tecnologia é uma ferramenta poderosa que pode
              transformar o mundo e estou sempre buscando maneiras de contribuir
              para essa transformação.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
