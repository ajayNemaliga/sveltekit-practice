import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	root: '../sveltekit-practice/src/app.html',
	plugins: [sveltekit()]
});
