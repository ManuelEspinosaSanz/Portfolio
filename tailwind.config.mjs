/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Opción 1: Agregar colores personalizados
                'primary': '#3b82f6',
                'secondary': '#8b5cf6',
                'accent': '#f59e0b',

                // Opción 2: Personalizar colores específicos
                background: {
                    light: '#ffffff',
                    dark: '#0f172a',
                },
                text: {
                    light: '#1f2937',
                    dark: '#f8fafc',
                },
            },
        },
    },
    plugins: [],
}