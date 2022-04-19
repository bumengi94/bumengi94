import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/Loading";

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
