import React, { Fragment } from "react";
import { FC } from "react";
import { Background, Header } from "./components";

const App: FC = () => {
	return (
		<Fragment>
			<Background />
			<Header />
		</Fragment>
	);
};

export default App;
