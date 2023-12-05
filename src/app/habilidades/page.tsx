import {
  CssIcon,
  DjangoIcon,
  HtmlIcon,
  JavaScriptIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/Icons'
import Link from 'next/link'

const technologies = [
  {
    name: 'CSS',
    icon: <CssIcon />,
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Django',
    icon: <DjangoIcon />,
    documentationLink: 'https://docs.djangoproject.com/',
  },
  {
    name: 'HTML',
    icon: <HtmlIcon />,
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
    documentationLink:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Nest',
    icon: <NestIcon />,
    documentationLink: 'https://nestjs.com/',
  },
  {
    name: 'Next',
    icon: <NextIcon />,
    documentationLink: 'https://nextjs.org/',
  },
  {
    name: 'Node',
    icon: <NodeIcon />,
    documentationLink: 'https://nodejs.org/en/docs/',
  },
  {
    name: 'Postgres',
    icon: <PostgresIcon />,
    documentationLink: 'https://www.postgresql.org/docs/',
  },
  {
    name: 'Prisma',
    icon: <PrismaIcon />,
    documentationLink: 'https://www.prisma.io/docs/',
  },
  {
    name: 'Python',
    icon: <PythonIcon />,
    documentationLink: 'https://docs.python.org/3/',
  },
  {
    name: 'React',
    icon: <ReactIcon />,
    documentationLink: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    name: 'Styled Components',
    icon: <StyledComponentsIcon />,
    documentationLink: 'https://styled-components.com/docs',
  },
  {
    name: 'Tailwind',
    icon: <TailwindIcon />,
    documentationLink: 'https://tailwindcss.com/docs',
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
    documentationLink: 'https://www.typescriptlang.org/docs/',
  },
]

export default function Habilidades() {
  return (
    <main className="h-full w-full overflow-hidden bg-content-1 lg:max-h-[calc(100%-16px)] lg:max-w-4xl">
      <header className="flex h-12 bg-content-2 p-3">Habilidades</header>
      <div className="max-h-full flex-1 overflow-auto p-4">
        <div className="mb-4 content-center"></div>
        <div className="min-h-[400px] py-4">
          <ul className="grid grid-cols-3 gap-y-8 py-4 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <li key={index}>
                <Link
                  target="_blank"
                  href={tech.documentationLink}
                  className="flex h-full flex-col items-center justify-between"
                >
                  <span className="h-auto w-16 p-2">{tech.icon}</span>
                  <span>{tech.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="max-h-full flex-1 overflow-auto p-4">
        <ul className="grid grid-cols-3 gap-8 gap-y-8 py-4 md:grid-cols-4 lg:grid-cols-5 ">
          {technologies.map((tech, index) => (
            <li key={index}>
              <Link
                target="_blank"
                href={tech.documentationLink}
                className="flex flex-col items-center gap-1"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </main>
  )
}
