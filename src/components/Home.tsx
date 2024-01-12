import React, { useState } from "react";

export const Home = () => {
	const [year] = useState(new Date().getFullYear() - 2008);

	return (
		<div className="bg-opacity-60 bg-[#881f50] p-6 pt-0 md:w-1/2 lg:w-1/3 mx-auto rounded-lg shadow-md">
			<img
				className="object-cover border-4 border-[#BF2A70] w-48 h-48 mx-auto mb-4 rounded-b-full border-t-0"
				src="profile.webp"
				alt="Profile Picture"
			/>
			<h2 className="text-xl font-bold text-white mb-1 text-center">
				I'm Bugra Mengi
			</h2>
			<p className="text-white mb-4 text-center">Software Engineer</p>
			<p className="text-white">
				With a rich {year}-year journey navigating the dynamic landscape
				of technology, I have actively led and contributed to various
				application development projects. From the code's inception to
				the final deployment, I've been at the forefront, ensuring
				success at every stage
			</p>
			<div className="flex space-x-4 mt-4 justify-center">
				<a
					href="resume.pdf"
					download="bugra_mengi_resume.pdf"
					className="button"
				>
					Download CV
				</a>
				<a
					href="https:github.com/bumengi94"
					aria-label="github.com/bumengi94"
					className="button"
					target="_blank"
				>
					<i className="devicon-github-original" />
				</a>
				<a
					href="https:linkedin.com/in/bumengi94"
					aria-label="linkedin.com/in/bumengi94"
					className="button"
					target="_blank"
				>
					<i className="devicon-linkedin-plain" />
				</a>
			</div>
		</div>
	);
};
