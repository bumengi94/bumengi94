import { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				theme: "#BF2A70",
				theme1: "#8d2156",
				white: "#F5F5F5",
				border: "#333333",
			},
		},
	},
} satisfies Config;
