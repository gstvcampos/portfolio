export const projects = [
  {
    id: '1',
    category: 'front-end',
    name: 'Kenzie Hub',
    description:
      'Kenzie Hub é uma aplicação web robusta, projetada para oferecer uma interface de usuário segura e eficiente.\nA aplicação apresenta um sistema de cadastro e login, permitindo aos usuários criar uma conta pessoal e acessar suas informações de maneira segura. Uma vez autenticado, o usuário pode acessar a dashboard. Esta seção é protegida para garantir que apenas usuários autenticados possam visualizá-la.\nAlém disso, a aplicação possui um sistema de validação de campos nos formulários para garantir a precisão e a segurança dos dados. As respostas da API são exibidas de uma maneira amigável ao usuário, garantindo uma experiência de usuário suave e intuitiva.',
    deploy: 'https://react-entrega-kenzie-hub-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-gstvcampos/tree/main',
    technologies: [
      'TypeScript',
      'React',
      'Styled Components',
      'Zod',
      'React-Toastify',
    ],
  },
  {
    id: '2',
    category: 'front-end',
    name: 'Burguer',
    description:
      'Burguer é uma loja virtual de hambúrgueres dinâmica e interativa.\nA aplicação se integra a uma API para listar uma variedade de hambúrgueres disponíveis para compra. Um dos recursos notáveis é um campo de busca em tempo real. Este recurso filtra os itens listados com base no nome ou categoria inseridos, proporcionando uma experiência de usuário mais personalizada e eficiente.\nAlém disso, a aplicação possui um carrinho de compras interativo, implementado como um modal. O carrinho de compras exibe todos os itens selecionados junto com a soma total. Isso permite que os usuários revisem e modifiquem facilmente suas seleções antes de finalizar a compra.',
    deploy:
      'https://react-entrega-s3-template-hamburgueria-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-gstvcampos/tree/main',
    technologies: ['JavaScript', 'React', 'Styled Components'],
  },
  {
    id: '3',
    category: 'front-end',
    name: 'Nu Kenzie',
    description:
      'Nu Kenzie é um aplicativo de controle financeiro intuitivo e fácil de usar.\nA aplicação permite aos usuários lançar todas as suas receitas e despesas por meio de um formulário simplificado. Todas as transações são então listadas e o saldo total é calculado e exibido. Isso proporciona uma visão clara da situação financeira do usuário.\nA interface do usuário foi projetada com foco na simplicidade e na eficiência. Isso torna o gerenciamento financeiro não apenas uma tarefa fácil, mas também uma experiência agradável.',
    deploy:
      'https://react-entrega-s1-template-nu-kenzie-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-gstvcampos/tree/master',
    technologies: ['JavaScript', 'React', 'Styled Components'],
  },
  {
    id: '4',
    category: 'full-stack',
    name: 'Contatos',
    description:
      'Contatos é uma aplicação full stack robusta, projetada para o gerenciamento de clientes e seus contatos.\nO back-end foi estruturado de forma a criar um relacionamento de um para muitos entre clientes e contatos em duas tabelas distintas. Isso permite que um único cliente tenha vários contatos associados.\nNo front-end, a aplicação proporciona uma interface de usuário moderna e responsiva. Para otimizar o desempenho, apenas os botões foram configurados para renderizar no lado do cliente.\nA aplicação lista todos os clientes cadastrados e oferece funcionalidades para adicionar, editar e excluir clientes e contatos.',
    deploy: 'https://fullstack-customer-contact-gstvcampos.vercel.app/',
    main: 'https://github.com/gstvcampos/fullstack-customer-contact-gstvcampos/tree/main',
    technologies: [
      'TypeScript',
      'Zod',
      'Nest.js',
      'Prisma',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    id: '5',
    category: 'back-end',
    name: 'Kanvas',
    description:
      'Kanvas é um aplicativo de gerenciamento de cursos e aulas.\nDesenvolvido utilizando a linguagem Python, com o auxílio de frameworks do Django Rest Framework, a estrutura da aplicação é complexa e eficiente. Ela inclui diversos relacionamentos entre as entidades Account, Course e Content, permitindo uma gestão eficiente dos cursos e dos alunos.\nAlém disso, a aplicação conta com um sistema de views concretas e Model Serializer. Isso garante a consistência e a qualidade do código.',
    main: 'https://github.com/gstvcampos/m5-projeto-final-kanvas-gstvcampos/tree/main',
    technologies: ['Python', 'Django', 'Django Rest Framework', 'PostgreSQL'],
  },
  {
    id: '6',
    category: 'back-end',
    name: 'KiMoveis',
    description:
      'KiMoveis é uma aplicação voltada para o mercado imobiliário.\nA aplicação possui uma estrutura robusta de cinco tabelas. Essas tabelas são responsáveis por armazenar os dados dos usuários, as categorias de imóveis, os próprios imóveis e os agendamentos de visitas.\nA aplicação permite que os usuários agendem visitas às propriedades de seu interesse. Isso oferece uma visão clara e atualizada dos horários disponíveis para visitação.',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-gstvcampos',
    technologies: ['TypeScript', 'Zod', 'TypeORM', 'PostgreSQL'],
  },
  {
    id: '7',
    category: 'full-stack',
    name: 'Hashtag Store',
    description:
      'Hashtag Store é um ecommerce desenvolvida utilizando as mais recentes tecnologias para proporcionar uma experiência de compra online intuitiva e eficiente. Confira algumas das funcionalidades principais:\nAcesse sua conta de forma segura com credenciais usuais, ou opte por login via Google ou GitHub.\nReceba notificações importantes, como confirmações de conta e redefinições de senha, via e-mail.\nAdicione itens ao carrinho de compras anonimamente e mantenha-os mesmo após fazer login.\nDescubra os custos de envio utilizando a API do Melhor Envio para uma estimativa precisa.',
    deploy: 'https://hashtagtest.shop/',
    main: 'https://github.com/gstvcampos/ecommerce',
    technologies: [
      'TypeScript',
      'Next.js',
      'Zod',
      'Prisma',
      'Resend',
      'MongoDB',
      'DaisyUI',
      'Tailwind',
    ],
  },
]
