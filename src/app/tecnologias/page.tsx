import MainContainer from '@/components/Container/MainContainer'
import CustomIcon from '@/components/CustomIcon'
import { technologies } from '@/db/technologies'
import Link from 'next/link'

export default function Tecnologias() {
  return (
    <MainContainer id="tecnologias" innerText="Tecnologias">
      <ul className="grid w-full grid-cols-2 pb-20 sm:grid-cols-3 md:grid-cols-4 md:pb-0 lg:grid-cols-5">
        {technologies.map((tech, index) => (
          <li key={index}>
            <Link
              target="_blank"
              href={tech.documentationLink}
              className="group relative my-5 box-border flex w-full flex-col items-center text-center"
            >
              <span className="rounded-3xl bg-content-1 p-6 transition duration-500 ease-in-out group-hover:rounded-full group-hover:bg-focus-2">
                <CustomIcon
                  alt="icone da tecnologia"
                  src={tech.icon}
                  className="h-12 transition duration-1000 ease-in-out group-hover:scale-125"
                />
              </span>
              <span className="font-segoe-bold group-hover:text-txt-3">
                {tech.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
