import { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Poppins",
			},
		},
	},
	plugins: [],
} satisfies Config;
