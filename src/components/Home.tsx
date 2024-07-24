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
				Enthusiastic Senior Software Engineer with a proven track record
				in leading software development projects. Thriving in
				challenging environments, currently based in Dubai. Committed to
				advancing technology and driving innovation.
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
