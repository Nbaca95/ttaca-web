// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// TODO: confirmar y reemplazar por el dominio real de producción.
	// Se usa para generar URLs absolutas en canonical, hreflang y Open Graph.
	site: 'https://www.ttaca.com',
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});