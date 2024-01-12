import React, { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

console.log(`  ____  _    _  _____ _____              __  __ ______ _   _  _____ _____ 
 |  _ \\| |  | |/ ____|  __ \\     /\\     |  \\/  |  ____| \\ | |/ ____|_   _|
 | |_) | |  | | |  __| |__) |   /  \\    | \\  / | |__  |  \\| | |  __  | |  
 |  _ <| |  | | | |_ |  _  /   / /\\ \\   | |\\/| |  __| | . \` | | |_ | | |  
 | |_) | |__| | |__| | | \\ \\  / ____ \\  | |  | | |____| |\\  | |__| |_| |_ 
 |____/ \\____/ \\_____|_|  \\_\\/_/    \\_\\ |_|  |_|______|_| \\_|\\_____|_____|
`);
