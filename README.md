# 💼 Portfolio Personal

Portfolio minimalista y moderno construido con Astro y TailwindCSS.

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://www.manuelespinosa.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🚀 Demo

Visita el portfolio en vivo: [www.manuelespinosa.dev](https://www.manuelespinosa.dev)

## ✨ Características

- 🎨 Diseño minimalista y profesional
- 🌓 Modo oscuro/claro
- 📱 Totalmente responsive
- ⚡ Performance optimizado (92+ en PageSpeed)
- 🔍 SEO optimizado (100/100)
- ♿ Accesibilidad 100/100
- 🎯 Animaciones suaves al scroll
- 🚀 Desplegado en Vercel

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [TailwindCSS](https://tailwindcss.com/) - CSS utility-first
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Poppins](https://fonts.google.com/specimen/Poppins) - Tipografía

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/manuelespinosasanz/portfolio.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 🏗️ Comandos

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia el servidor local en `localhost:4321`|
| `npm run build`        | Construye el sitio para producción         |
| `npm run preview`      | Vista previa del build localmente          |

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Contact.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── config.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## ⚙️ Configuración

Para personalizar el portfolio, edita el archivo `src/config.ts`:

```typescript
export const siteConfig = {
  name: "Tu Nombre",
  role: "Tu Profesión",
  description: "Tu descripción...",
  // ... más configuración
};
```

## 🎨 Personalización

### Colores
Edita `tailwind.config.mjs` para cambiar la paleta de colores.

### Fuentes
Cambia la fuente en `src/layouts/Layout.astro` (actualmente usa Poppins).

### Contenido
Todo el contenido está centralizado en `src/config.ts` para fácil edición.

## 📊 Performance

- ⚡ PageSpeed Desktop: **99/100**
- 📱 PageSpeed Mobile: **92/100**
- ♿ Accesibilidad: **100/100**
- 🎯 SEO: **100/100**

## 🚀 Deployment

El sitio está configurado para desplegarse automáticamente en Vercel:

1. Conecta tu repositorio a Vercel
2. Configura el dominio personalizado
3. El deploy se hace automáticamente con cada push a `main`

## 📝 Licencia

MIT License - siéntete libre de usar este portfolio como template para el tuyo.

## 🤝 Contacto

- Portfolio: [manuelespinosa.dev](https://www.manuelespinosa.dev)
- GitHub: [@manuelespinosasanz](https://github.com/manuelespinosasanz)
- LinkedIn: [Manuel Espinosa](https://linkedin.com/in/manuelespinosasanz)
- Email: mespinosasanz@gmail.com

---

⭐ Si te gustó este portfolio, no dudes en darle una estrella al repositorio!
