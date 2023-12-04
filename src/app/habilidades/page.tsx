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
    <main className="overflow-hidden">
      <ul className="grid grid-cols-3">
        {technologies.map((tech, index) => (
          <li key={index}>{tech.icon}</li>
        ))}
      </ul>
    </main>
  )
}
