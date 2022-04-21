import React, { FC } from "react";
import moment from "moment";

const Header: FC = () => {
	return (
		<header>
			<img src="/logo.svg" alt="logo" />
			<nav>
				<a href="/">About</a>
				<a href="/">Blog</a>
				<a href="/">Contact</a>
			</nav>
			<div className="right">
				<div className="time">{moment().format("LLLL")}</div>
			</div>
		</header>
	);
};

export default Header;
