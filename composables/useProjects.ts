import type { Project } from "~/types/Project";

export default function useProjects() {
  function getAll(){
    return [
      {
        id: 1,
        name: "Seminário IoT",
        shortDescription:
          "Seminário sobre Internet das Coisas, com desenvolvimento de site HTML5 e CSS3.",
        longDescription: "Ao longo do primeiro semestre do curso de Sistemas para Internet na Fatec Lins, foi desenvolvido um projeto interdisciplinar que integrou conhecimentos de diversas áreas. As disciplinas de Design Digital, Padrões de Projetos de Sítios Internet e Redes e Internet foram utilizadas para a criação de um projeto prático em equipe.",
        skills: ["HTML5", "CSS3"],
        knowledgeAreas: ["Front-end", "Web Design"],
        image: "iot.webp",
      },
      {
        id: 2,
        name: "Macieuls Coffee: Flyer da cafeteria",
        shortDescription:
          "Flyer criado no Corel Draw para a cafeteria Macieuls Coffee.",
        longDescription: 'Durante o segundo semestre do curso na disciplina de Prática de Design no CorelDRAW. Seguindo as instruções do professor, o objetivo era reproduzir um flyer promocional para a cafeteria inventada "Macieuls Coffee".',
        skills: ["Corel Draw"],
        knowledgeAreas: ["Design Gráfico"],
        image: "maciels_coffe.webp",
      },
      {
        id: 3,
        name: "Calculadora científica responsiva",
        shortDescription:
          "Calculadora científica responsiva criada com HTML, CSS e JavaScript.",
        longDescription: "No decorrer do curso do terceiro semestre, na disciplina Programação de Sítios Internet III, foi sugerido criar uma calculadora científica responsiva usando HTML, CSS e JavaScript (ECMAScript 6). O objetivo era criar uma aplicação que incorporasse uma variedade de funções matemáticas avançadas para que fosse útil e versátil para usuários que precisassem realizar cálculos complexos.",
        skills: ["HTML5", "CSS3", "JavaScript"],
        knowledgeAreas: ["Front-end", "Web Design"],
        image: "calc.webp",
      },
      {
        id: 4,
        name: "E-commerce com JQuery",
        shortDescription: "E-commerce criado com JQuery e API de produtos.",
        longDescription: "Durante o quarto semestre, dentro do âmbito da disciplina de Tópicos Especiais em Sistemas para Internet, foi atribuída aos alunos uma tarefa crucial: aprofundar conhecimentos sobre requisições à API utilizando jQuery. O desafio consistiu em desenvolver um e-commerce fictício que consumisse dados de uma API simulada.",
        skills: ["JQuery", "Tailwind CSS", "API REST"],
        knowledgeAreas: ["Front-end", "Web Design"],
        image: "jquery_api.webp",
      },
      {
        id: 5,
        name: "Aplicação de Livraria",
        shortDescription: "Aplicação de livraria com Ionic e NuxtJS.",
        longDescription: "Durante o quinto semestre do curso, na disciplina de Desenvolvimento de Aplicativos Móveis, foi proposto um projeto para desenvolver um aplicativo de venda de livros utilizando Ionic e Capacitor. O objetivo era aplicar os conhecimentos adquiridos sobre desenvolvimento de aplicativos móveis e componentes UI para criar uma aplicação funcional e atrativa.",        
        skills: ["Ionic", "NuxtJS", "Tailwind CSS"],
        knowledgeAreas: ["Front-end", "Mobile"],
        image: "ionic_app.webp",
      },
      {
        id: 6,
        name: "Sistema de login com Laravel e Docker",
        shortDescription:
          "Arquitetura orquestrada com Docker, utilizando Laravel e MySQL.",
        longDescription: "o sexto semestre do curso, durante a disciplina de Tópicos Especiais em Sistemas para Internet III, foi proposto um projeto que envolvia a utilização do Docker para criar um ambiente de desenvolvimento isolado. O objetivo era configurar e gerenciar dois containers: um para o banco de dados MySQL e outro para uma aplicação PHP, focada em um sistema de login. Este projeto proporcionou uma compreensão prática de como o Docker pode simplificar o gerenciamento de ambientes de desenvolvimento, permitindo o isolamento das dependências e a replicação do ambiente em diferentes máquinas de forma consistente. ",
        skills: ["Laravel", "Docker", "MySQL"],
        knowledgeAreas: ["Back-end", "DevOps"],
        image: "docker.webp",
      },
    ] as Project[];
  }  

  function getById(id: number) {
    let project = getAll().find((project) => project.id === id);
    if (!project) {
      throw new Error("Project not found");
    }
    return project;
  }

  return { getAll, getById };
}
