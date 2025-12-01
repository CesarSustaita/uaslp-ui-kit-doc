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
            {
                label: 'Components',
                items: [
                    // Se asume que los archivos están en docs/StylesGuide/
                    { label: 'Uso de Componentes', link: 'components/uso-componentes' }, 
                    { label: 'Buttons', link: 'components/buttons' }, 
                    { label: 'Switch', link: 'components/switch' }, 
                    { label: 'Checkbox', link: 'components/checkbox' }, 
                    { label: 'Radio Button', link: 'components/radio-button' }, 
                    { label: 'Tag', link: 'components/tag' }, 
                    { label: 'Labels', link: 'components/labels' }, 
                    { label: 'Inputs', link: 'components/inputs' }, 
                    { label: 'Cards', link: 'components/cards' }, 
                    { label: 'List', link: 'components/list' }, 
                    { label: 'Dialog', link: 'components/dialog' }, 
                    { label: 'Tooltip', link: 'components/tooltip' }, 
                    { label: 'Tabs', link: 'components/tabs' }, 
                    { label: 'Pagination', link: 'components/pagination' }, 
                    { label: 'Accordion', link: 'components/accordion' }, 
                    { label: 'Menu', link: 'components/menu' }, 
                    { label: 'Notifications', link: 'components/notification' }, 
                ]
            },
            {
                label: 'About',
                items: [
                    // Se asume que los archivos están en docs/StylesGuide/
                    { label: 'Sobre este proyecto', link: 'about/acerca-proyecto' }, 
                    { label: 'Contribuir', link: 'about/contribuir' }, 
                    { label: 'Licencia', link: 'about/licencia' }, 
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