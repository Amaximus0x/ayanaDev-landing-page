import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [svelte()],
	server: {
		host: true, // This exposes the server to the network
		port: 5173, // You can change this port if needed
	}
}); 