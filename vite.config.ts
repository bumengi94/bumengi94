import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const config = defineConfig({
	plugins: [
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				id: "/",
				theme_color: "#BF2A70",
				icons: [
					{
						src: "logo@144.svg",
						sizes: "144x144",
					},
					{
						src: "logo@512.svg",
						sizes: "512x512",
					},
					{
						src: "logo@512.png",
						sizes: "512x512",
						purpose: "maskable",
					},
				],
				screenshots: [
					{
						src: "logo@512.svg",
						sizes: "512x512",
					},
					{
						form_factor: "wide",
						src: "logo@512.svg",
						sizes: "512x512",
						platform: "ios android",
					},
				],
				description: "Bugra Mengi",
			},
			devOptions: {
				enabled: true,
			},
		}),
	],
});

export default config;
