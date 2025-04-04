import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		"@/assets/sass/app.scss",
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: '@use "@/assets/sass/variables" as *;'
				},
			},
		},
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true }
})
