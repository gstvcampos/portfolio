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
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="bg-content-2 px-4 py-8">
            <h2 className="px-3 text-3xl">
              Ola, eu sou o
              <span className="font-segoe-bold text-txt-3"> Gustavo!</span>
            </h2>
            <p className="px-3 text-txt-2">desenvolvedor web fullstack</p>
            <p className="m-3">👋 Olá, seja bem-vindo ao meu portfólio!</p>
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
          <div className="min-w-[230px] bg-content-1 px-4 py-8">
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
