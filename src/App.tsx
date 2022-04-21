import React, { Fragment } from "react";
import { FC } from "react";
import { Background, Dock, Menu, Window } from "./components";

const App: FC = () => {
	return (
		<Fragment>
			<Background />
			<Menu />
			<Window />
			<Dock />
		</Fragment>
	);
};

export default App;
