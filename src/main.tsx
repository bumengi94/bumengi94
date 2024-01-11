import { render } from "react-dom";
import React, { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
