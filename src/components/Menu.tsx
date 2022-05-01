import React, { FC } from "react";
import moment from "moment";

const Menu: FC = () => {
	return (
		<header>
			<img src="/logo.svg" alt="logo" />
			<nav>
				<button>About</button>
				<button>Blog</button>
				<button>Contact</button>
			</nav>
			<div className="right">
				<div className="time">{moment().format("LLLL")}</div>
			</div>
		</header>
	);
};

export default Menu;
