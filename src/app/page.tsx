import MainContainer from '@/components/Container/MainContainer'
import { MailIcon, ResumeIcon } from '@/db/Icons'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <MainContainer id="home" innerText="Perfil">
      <div className="flex h-full min-w-0 flex-col md:flex-row">
        <div className="min-w-0 flex-shrink-0 p-4 text-center">
          <Image
            className="inline-block rounded-lg"
            priority={true}
            src="/photo.png"
            width={200}
            height={200}
            alt={'Imagem do autor'}
          />
          <div>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1jrGJ9Cqm193IuKJvPNoTZ3wLIg8yROfw/view?usp=drive_link"
              className="mx-2 my-4 inline-block min-w-[150px] rounded-md border-b-2 bg-bar-2 hover:bg-focus-1 md:mx-0 md:flex"
            >
              <span className="flex items-center">
                <span className="border-r-[1px] px-3">
                  <ResumeIcon />
                </span>
                <span className="px-4 py-2">Currículo</span>
              </span>
            </Link>
            <Link
              target="_blank"
              href="mailto:gustavo.bmc76@gmail.com"
              className="m-1 inline-block min-w-[150px] rounded-md border-b-2 bg-bar-2 hover:bg-focus-1 md:mx-0 md:flex"
            >
              <span className="flex items-center">
                <span className="border-r-[1px] px-3">
                  <MailIcon />
                </span>
                <span className="px-4 py-2">Email</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="p-4 pb-20 text-justify md:pb-0">
          <h2 className="px-3 text-3xl">
            Ola, eu sou o
            <span className="font-segoe-bold text-txt-3"> Gustavo!</span>
          </h2>
          <p className="px-3 text-txt-2">desenvolvedor web fullstack</p>
          <p className="m-3">👋 Seja bem-vindo ao meu portfólio!</p>
          <p className="m-3">
            🚀 Aqui, você vai encontrar uma diversidade de projetos que refletem
            a minha trajetória e crescimento no fascinante mundo da programação.
          </p>
          <p className="m-3">
            👨‍💻 Eu sou um desenvolvedor fullstack apaixonado por tecnologia e
            sempre em busca de novos aprendizados.
          </p>
          <p className="m-3">
            💡 Acredito que a tecnologia é uma ferramenta poderosa que pode
            transformar o mundo e estou sempre buscando maneiras de contribuir
            para essa transformação.
          </p>
        </div>
      </div>
    </MainContainer>
  )
}
