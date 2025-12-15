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
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
        image: "/projects/ecommerce.jpg", // Coloca imágenes en public/projects/
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/manuelespinosasanz/ecommerce",
        demo: "https://ecommerce-demo.com",
        featured: true,
    },
    {
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
        image: "/projects/taskapp.jpg",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        github: "https://github.com/manuelespinosasanz/taskapp",
        demo: "https://taskapp-demo.com",
        featured: true,
    },
    {
        title: "Weather Dashboard",
        description: "Dashboard del clima con visualización de datos, pronósticos y mapas interactivos.",
        image: "/projects/weather.jpg",
        tags: ["Vue.js", "TailwindCSS", "OpenWeather API"],
        github: "https://github.com/manuelespinosasanz/weather",
        demo: "https://weather-demo.com",
        featured: false,
    },
    {
        title: "Portfolio Template",
        description: "Template de portfolio minimalista y totalmente personalizable con modo oscuro.",
        image: "/projects/portfolio.jpg",
        tags: ["Astro", "TailwindCSS", "TypeScript"],
        github: "https://github.com/manuelespinosasanz/portfolio",
        demo: "https://portfolio-demo.com",
        featured: false,
    },
];

export const experience = [
    {
        company: "Tech Solutions Inc.",
        position: "Junior Web Developer",
        period: "Febrero 2026 - Junio 2026",
        description: "Desarrollo y mantenimiento de aplicaciones web empresariales. Modernizando y actualizando código.",
        technologies: ["Vue.js"],
    },
];