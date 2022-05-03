import React, { CSSProperties, FC, useState } from "react";

const Dock: FC = () => {
	const icons = [
		"docker",
		"nodejs",
		"javascript",
		"typescript",
		"react",
		"vuejs",
		"sass",
		"tailwindcss",
		"flutter",
		"swift",
		"kotlin",
		"python",
		"java",
		"csharp",
		"php",
		"ruby",
		"go",
		"rust",
		"perl",
		"dart",
		"mysql",
		"mongodb",
		"postgresql",
		"nginx",
		"redis",
		"apachekafka",
		"jenkins",
		"kubernetes",
	];

	const [hover, setHover] = useState(null);

	const getStyle = (index: number): CSSProperties => {
		let transform = "";
		if (hover === index) transform = "scale(2)";
		if (hover === index - 1) transform = "scale(1.5)";
		if (hover === index + 1) transform = "scale(1.5)";
		if (hover === index - 2) transform = "scale(1.2)";
		if (hover === index + 2) transform = "scale(1.2)";

		let margin = "";
		if (hover === index) margin = "0 1.2rem";
		if (hover === index - 1) margin = "0 1rem";
		if (hover === index + 1) margin = "0 1rem";
		if (hover === index - 2) margin = "0 1rem";
		if (hover === index + 2) margin = "0 1rem";

		return {
			transform,
			margin,
		};
	};

	return (
		<footer>
			<div className="apps">
				{icons.map((icon, index) =>
					!!icon ? (
						<button key={index} onMouseOver={() => setHover(index)} onMouseLeave={() => setHover(null)}>
							<i style={getStyle(index)} className={`devicon-${icon}-plain `} />
						</button>
					) : (
						<div style={{ width: "1.5rem" }} />
					)
				)}
			</div>
		</footer>
	);
};

export default Dock;
