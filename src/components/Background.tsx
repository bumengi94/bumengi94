import React, { FC, useEffect } from "react";

const Background: FC = () => {
	useEffect(() => {
		const canvas = document.getElementById("canvas") as HTMLCanvasElement,
			ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let letters: any = "0123456789ABCDEF";
		letters = letters.split("");
		let fontSize = 10,
			columns = canvas.width / fontSize;
		let drops = [];
		for (let x = 0; x < columns; x++) drops[x] = 1;
		function draw() {
			ctx.fillStyle = "rgba(33, 46, 64, .05)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "#F0F";
			ctx.font = fontSize + "px arial";
			for (let i = 0; i < drops.length; i++) {
				let text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);
				if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
				drops[i]++;
			}
		}
		const bgDraw = setInterval(draw, 33);

		return () => clearInterval(bgDraw);
	}, []);

	return <canvas id="canvas" />;
};

export default Background;
