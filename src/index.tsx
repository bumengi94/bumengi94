import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Loading } from "./components";
import "./sass/main.sass";
import "devicon/devicon.min.css";

const app = document.getElementById("app");
const root = createRoot(app);
const App = lazy(() => import("./App"));

root.render(
	<StrictMode>
		<Suspense fallback={<Loading />}>
			<App />
		</Suspense>
	</StrictMode>
);
