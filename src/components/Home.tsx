import React from "react";

export const Home = () => {
	return (
		<div className="items-center flex flex-col">
			<img
				className="profile-picture mt-20"
				src="profile.webp"
				alt="Profile Picture"
			/>
			<h1 className="text-white text-4xl mt-10">
				Welcome! I'm Bugra Mengi
			</h1>
			<h2 className="text-white text-xl mt-4 max-w-xl text-center font-light">
				With a rich 16-year journey navigating the dynamic landscape of
				technology, I have actively led and contributed to various
				application development projects. From the code's inception to
				the final deployment, I've been at the forefront, ensuring
				success at every stage
			</h2>
			<div className="flex gap-x-2 mt-5">
				<a
					href="resume.pdf"
					download="bugra_mengi_resume.pdf"
					className="button"
				>
					Download CV
				</a>
				<a
					href="https://github.com/bumengi94"
					className="button"
					aria-label="github.com/bumengi94"
				>
					<i className="devicon-github-original" />
				</a>
				<a
					href="https://linkedin.com/in/bumengi94"
					className="button"
					aria-label="linkedin.com/in/bumengi94"
				>
					<i className="devicon-linkedin-plain" />
				</a>
			</div>
		</div>
	);
};
