type Project = {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  skills: string[];
};
export default function useProjects() {
  return [
    {
      id: 1,
      name: "Seminário IoT",
      slug: "seminario-iot",
      description:
        "Projeto de Seminário sobre Internet das Coisas, desenvolvido com HTML e CSS.",
      skills: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "Macieuls Coffee: Flyer de cafeteria",
      slug: "macieuls-coffee-flyer-de-cafeteria",
      description:
        "Flyer de cafeteria desenvolvido no CorelDRAW, focado em um design moderno e atrativo.",
      skills: ["CorelDRAW"],
    },
    {
      id: 3,
      name: "Calculadora científica responsiva",
      slug: "calculadora-cientifica-responsiva",
      description:
        "Projeto de calculadora científica responsiva, explorando as funcionalidades do ECMAScript 6 para cálculos avançados e desempenho otimizado.",
      skills: ["HTML", "CSS", "Flexbox", "Grid Layout", "JavaScript"],
    },
    {
      id: 4,
      name: "Eccomerce",
      slug: "eccomerce",
      description:
        "Projeto de e-commerce desenvolvido com jQuery e Tailwind CSS, integrando uma API externa de produtos fictícios.",
      skills: ["jQuery", "Tailwind CSS"],
    },
    {
      id: 5,
      name: "Aplicação de livraria",
      slug: "aplicacao-de-livraria",
      description:
        "Aplicação para livraria desenvolvida com Ionic e NuxtJS, oferecendo uma interface fluida para navegação e gerenciamento de livros.",
      skills: ["Ionic", "VueJS", "NuxtJS"],
    },
    {
      id: 6,
      name: "Sistema de Login com Docker",
      slug: "sistema-de-login-com-docker",
      description:
        "Sistema de login desenvolvido com Laravel e MySQL, utilizando Docker-compose para orquestrar os containers de forma eficiente e garantir a escalabilidade.",
	  skills: ["Laravel", "MySQL", "Docker"],
    },
  ] as Project[];
}

