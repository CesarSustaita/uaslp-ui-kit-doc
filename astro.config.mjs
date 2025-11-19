// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        plugins: [starlightThemeObsidian({
               graph: false
            })],
        title: 'UASLP UI Kit',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introducción', link: 'getting-started/introduccion' },
                    { label: 'Diseño UX UI', link: 'getting-started/uxui' },
                    { label: 'Arquitectura y Tecnología', link: 'getting-started/arquitectura-tecnologia' },
                    { label: 'Contenido del UI Kit', link: 'getting-started/contenido-ui-kit' },
                    { label: 'Inicio Rápido', link: 'getting-started/inicio-rapido' },

                ],
            },
            {
                label: 'Styles Guide',
                items: [
                    // Se asume que los archivos están en docs/StylesGuide/
                    { label: 'Uso de Estilos', link: 'styles-guide/estilos' }, 
                    { label: 'Paleta de Colores', link: 'styles-guide/colores' },
                    { label: 'Tipografía', link: 'styles-guide/tipografia' },
                    { label: 'Breakpoints y Grid', link: 'styles-guide/espaciado-grid' },
                    { label: 'Shadow y Bordes', link: 'styles-guide/shadow-bordes' },
                    { label: 'Elementos Estáticos', link: 'styles-guide/elementos-estaticos' },
                ]
            },
        ],
        customCss:[
            //Ruta alternativa al css personalizado
            './src/assets/styles/uaslp-styles.css',
        ],
		}), 
	],
});