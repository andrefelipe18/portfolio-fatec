type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  knowledgeAreas: string[];
  image: string;
};

export default function useProjects() {
  return [
    {
      id: 1,
      name: "Seminário IoT",
      description:
        "Seminário sobre Internet das Coisas, com desenvolvimento de site HTML5 e CSS3.",
      skills: ["HTML5", "CSS3"],
      knowledgeAreas: ["Front-end", "Web Design"],
    },
    {
      id: 2,
      name: "Macieuls Coffee: Flyer da cafeteria",
      description:
        "Flyer criado no Corel Draw para a cafeteria Macieuls Coffee.",
      skills: ["Corel Draw"],
      knowledgeAreas: ["Design Gráfico"],
    },
    {
      id: 3,
      name: "Calculadora científica responsiva",
      description:
        "Calculadora científica responsiva criada com HTML, CSS e JavaScript.",
      skills: ["HTML5", "CSS3", "JavaScript"],
      knowledgeAreas: ["Front-end", "Web Design"],
    },
    {
      id: 4,
      name: "E-commerce com JQuery",
      description: "E-commerce criado com JQuery e API de produtos.",
      skills: ["JQuery"],
      knowledgeAreas: ["Front-end", "Web Design"],
    },
    {
      id: 5,
      name: "Aplicação de Livraria",
      description: "Aplicação de livraria com Ionic e NuxtJS.",
      skills: ["Ionic", "NuxtJS", "Tailwind CSS"],
    },
    {
      id: 6,
      name: "Sistema de login com Laravel e Docker",
      description:
        "Arquitetura orquestrada com Docker, utilizando Laravel e MySQL.",
      skills: ["Laravel", "Docker", "MySQL"],
      knowledgeAreas: ["Back-end", "DevOps"],
    },
  ] as Project[];
}
