export const siteConfig = {
    name: "Manuel Espinosa",
    role: "Web Developer",
    description: "Construyo experiencias web modernas y minimalistas. Especializado en transformar ideas en productos digitales funcionales y accesibles.",
    email: "mespinosasanz@gmail.com",
    social: {
        github: "https://github.com/manuelespinosasanz",
        linkedin: "https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=manuelespinosasanz",
    },
};

export const projects = [
    {
        title: "MovieFinder",
        description: "Aplicación web para descubrir películas con cartelera contemporánea. Incluye búsqueda en tiempo real, filtrado por categorías (populares, en cartelera, próximos estrenos, mejor valoradas) y detalles completos de cada película.",
        image: "/projects/moviefinder.webp",
        tags: ["React", "API", "TailwindCSS", "Vercel"],
        github: "https://github.com/ManuelEspinosaSanz/MovieFinder", // Añade tu repo
        demo: "https://movie-finder-daw.vercel.app",
        featured: true, // Es un proyecto completo, merece estar destacado
        comingSoon: false,
    },
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
    /*
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
    */

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
