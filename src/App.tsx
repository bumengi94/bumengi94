import "./sass/main.sass";
import React, { FC, Fragment, Suspense } from "react";
import { Background, Contact, Home, Resume } from "./components";

export const App: FC = () => {
	return (
		<Suspense fallback={null}>
			<Background />
			<div className="front">
				<Home />
				<Resume />
				<Contact />
			</div>
		</Suspense>
	);
};
