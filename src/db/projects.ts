export const projects = [
  {
    id: 1,
    name: 'Kenzie Hub',
    description:
      'Este projeto é uma aplicação web robusta, desenvolvida com TypeScript, React e Styled Components. A aplicação integra-se a uma API para fornecer funcionalidades de autenticação, permitindo aos usuários se cadastrarem e fazerem login. Para garantir a precisão dos dados, todos os formulários de preenchimento utilizam a biblioteca Zod para validação de campos. Além disso, a aplicação utiliza o React-Toastify para exibir as respostas da API de uma maneira amigável ao usuário. Após o login bem-sucedido, um token de autenticação é armazenado no localStorage, permitindo a persistência da sessão do usuário. Na dashboard, implementei uma proteção de rota para garantir que apenas usuários autenticados tenham acesso, melhorando a segurança e a experiência do usuário.',
    deploy: 'https://react-entrega-kenzie-hub-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-gstvcampos/tree/main',
  },
  {
    id: 2,
    name: 'Burguer',
    description:
      'Este projeto é uma loja virtual de hambúrgueres dinâmica e interativa, desenvolvida com JavaScript, React e Styled Components. A aplicação se integra a uma API para listar uma variedade de hambúrgueres disponíveis para compra. Um dos recursos notáveis é um campo de busca em tempo real que filtra os itens listados com base no nome ou categoria inseridos, proporcionando uma experiência de usuário mais personalizada e eficiente. Além disso, a aplicação possui um carrinho de compras interativo implementado como um modal. Este modal pode ser fechado de várias maneiras - pressionando a tecla "Esc", clicando fora do modal ou no botão de fechar - oferecendo ao usuário flexibilidade no controle da interface. O carrinho de compras exibe todos os itens selecionados junto com a soma total, permitindo que os usuários revisem e modifiquem facilmente suas seleções antes de finalizar a compra.',
    deploy:
      'https://react-entrega-s3-template-hamburgueria-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-gstvcampos/tree/main',
  },
  {
    id: 3,
    name: 'Nu Kenzie',
    description:
      'Este projeto é um aplicativo de controle financeiro intuitivo e fácil de usar, desenvolvido com JavaScript, React e Styled Components. A aplicação permite aos usuários lançar todas as suas receitas e despesas por meio de um formulário simplificado. Todas as transações são então listadas e o saldo total é calculado e exibido, proporcionando uma visão clara da situação financeira do usuário. A interface do usuário, projetada com foco na simplicidade e na eficiência, torna o gerenciamento financeiro não apenas uma tarefa fácil, mas também uma experiência agradável.',
    deploy:
      'https://react-entrega-s1-template-nu-kenzie-gstvcampos.vercel.app/',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-gstvcampos/tree/master',
  },
  {
    id: 4,
    name: 'Contatos',
    description:
      'Este projeto é uma aplicação full stack robusta para gerenciamento de clientes e seus contatos. O back-end foi construído com Nest.js e Prisma, criando um relacionamento de um para muitos entre clientes e contatos em duas tabelas, permitindo que um único cliente tenha vários contatos. No front-end, a aplicação foi desenvolvida com Next.js e Tailwind CSS, proporcionando uma interface de usuário moderna e responsiva. Para otimizar o desempenho, todos os botões foram configurados para renderizar no lado do servidor. A aplicação lista todos os clientes cadastrados e oferece funcionalidades para adicionar, editar e excluir clientes e contatos. Este projeto demonstra minha capacidade de criar aplicações full stack eficientes e fáceis de usar.',
    deploy: 'https://fullstack-customer-contact-gstvcampos.vercel.app/',
    main: 'https://github.com/gstvcampos/fullstack-customer-contact-gstvcampos/tree/main',
  },
  {
    id: 5,
    name: 'Kanvas',
    description:
      'Este projeto é um aplicativo de gerenciamento de cursos e aulas. A aplicação foi desenvolvida utilizando a linguagem Python, com o auxílio do framework Django e do Django Rest Framework e postegres para o armazenamento de dados. A estrutura da aplicação inclui diversos relacionamentos entre as entidades Account, Course e Content, permitindo uma gestão eficiente dos cursos e dos alunos. Além disso, a aplicação conta com um sistema de views concretas e Model Serializer do DRF, garantindo a consistência e a qualidade do código.',
    main: 'https://github.com/gstvcampos/m5-projeto-final-kanvas-gstvcampos/tree/main',
  },
  {
    id: 6,
    name: 'KiMoveis',
    description:
      'Este projeto é uma aplicação voltada para o mercado imobiliário, foi desenvolvida utilizando TypeScript, Zod, TypeORM e PostgreSQL como o banco de dado. A aplicação conta com uma estrutura de cinco tabelas, responsáveis por armazenar os dados dos usuários, as categorias de imóveis, os imóveis em si e os agendamentos de visitas. A aplicação permite que os usuários agendem visitas às propriedades de seu interesse, oferecendo uma visão clara e atualizada dos horários disponíveis.',
    main: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-kimoveis-gstvcampos',
  },
]
