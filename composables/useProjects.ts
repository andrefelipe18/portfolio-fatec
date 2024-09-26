
type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  image: string[];  
}

export default function useProjects() {
  return [
    {
      id: 1,
      name: "Seminário IoT",
      description: "Seminário sobre Internet das Coisas, com desenvolvimento de site HTML5 e CSS3.",
    },
    {
      id: 2,
      name: "Macieuls Coffee: Flyer da cafeteria",
      description: "Flyer criado no Corel Draw para a cafeteria Macieuls Coffee.",
    },
    {
      id: 3,
      name: "Calculadora científica responsiva", 
      description: "Calculadora científica responsiva criada com HTML, CSS e JavaScript.",
    },
    {
      id: 4,
      name: "E-commerce com JQuery",
      description: "E-commerce criado com JQuery e API de produtos.",
    },
    {
      id: 5,
      name: "Aplicação de Livraria",
      description: "Aplicação de livraria com Ionic e NuxtJS.",
    },
    {
      id: 6,
      name: "Sistema de login com Laravel e Docker",
      description: "Arquitetura orquestrada com Docker, utilizando Laravel e MySQL.",
    }
  ] as Project[];
}