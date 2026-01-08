// src/config.ts
export const siteConfig = {
    name: "Manuel Espinosa",
    role: "Web Developer",
    description: "Construyo experiencias web modernas y minimalistas. Especializado en transformar ideas en productos digitales funcionales y accesibles.",
    email: "mespinosasanz@gmail.com",
    social: {
        github: "https://github.com/manuelespinosasanz",
        linkedin: "https://linkedin.com/in/manuelespinosasanz",
    },
};

export const projects = [
    {
        title: "Landing Page - Compraventa de coches",
        description: "Plataforma para uso de captación de clientes de compra y venta de coches. Con un diseño moderno, responsive y optimizado.",
        image: "/projects/tasacion.webp", // Coloca imágenes en public/projects/
        tags: ["Astro", "Tailwind CSS"],
        github: "",
        demo: "https://www.tasotucoche.es/",
        featured: false,
        comingSoon: false
    },
    {
    title: "Próximamente",
    description: "Estoy trabajando en un nuevo proyecto. Mantente atento para ver lo que viene...",
    image: "/projects/coming-soon.jpg",
    tags: ["Astro", "Tailwind CSS", "API"],
    github: null,
    demo: null,
    featured: false,
    comingSoon: true,
  },
    
];

export const experience = [
    {
        company: "Freelance Developer",
        position: "Junior Web Developer",
        period: "2025 - Actualidad",
        description: "Desarrollo y mantenimiento de aplicaciones web empresariales. Modernizando y actualizando código.",
        technologies: ["Astro", "Tailwind CSS", "React"],
    },
];