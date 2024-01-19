import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Loading } from "./components";

const root = document.getElementById("root");

const App = lazy(() => import("./App"));

createRoot(root).render(
	<StrictMode>
		<Suspense fallback={<Loading />}>
			<App />
		</Suspense>
	</StrictMode>,
);

console.log(`  ____  _    _  _____ _____              __  __ ______ _   _  _____ _____ 
 |  _ \\| |  | |/ ____|  __ \\     /\\     |  \\/  |  ____| \\ | |/ ____|_   _|
 | |_) | |  | | |  __| |__) |   /  \\    | \\  / | |__  |  \\| | |  __  | |  
 |  _ <| |  | | | |_ |  _  /   / /\\ \\   | |\\/| |  __| | . \` | | |_ | | |  
 | |_) | |__| | |__| | | \\ \\  / ____ \\  | |  | | |____| |\\  | |__| |_| |_ 
 |____/ \\____/ \\_____|_|  \\_\\/_/    \\_\\ |_|  |_|______|_| \\_|\\_____|_____|
`);
