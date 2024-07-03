import LinkLG from '@/components/Buttons/LinkLG'
import MainContainer from '@/components/Container/MainContainer'
import { MailIcon, ResumeIcon } from '@/db/Icons'
import Image from 'next/image'

export default async function Home() {
  return (
    <MainContainer id="home" innerText="Perfil">
      <div className="flex h-full min-w-0 flex-col md:flex-row">
        <div className="min-w-0 flex-shrink-0 p-4 text-center">
          <Image
            className="inline-block rounded-lg"
            priority={true}
            src="/photo.webp"
            width={200}
            height={200}
            alt={'Imagem do autor'}
          />
          <div>
            <LinkLG
              href="https://drive.google.com/file/d/1idIx-BNXVJsFtqM9s3j_EBZ6W-8gabrJ/view?usp=sharing"
              icon={<ResumeIcon />}
              label="Currículo"
            />
            <LinkLG
              href="mailto:gustavo.bmc76@gmail.com"
              icon={<MailIcon />}
              label="Email"
            />
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
