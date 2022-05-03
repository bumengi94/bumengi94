import React, { FC } from "react";
import moment from "moment";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/all";

const Menu: FC = () => {
	return (
		<header>
			<button>
				<img src="/logo.svg" alt="logo" />
			</button>
			<nav>
				<button>About</button>
				<button>Blog</button>
				<button>Contact</button>
			</nav>
			<div className="right">
				<a target="_blank" href="tel:+905306497500">
					<FaPhone />
				</a>
				<a target="_blank" href="mailto:info@bugramengi.com">
					<FaEnvelope />
				</a>
				<a target="_blank" href="https://github.com/bumengi94">
					<FaGithub />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/bumengi94">
					<FaLinkedin />
				</a>
				<a target="_blank" href="https://twitter.com/bumengi94">
					<FaTwitter />
				</a>
				<a target="_blank" href="https://instagram.com/bumengi94">
					<FaInstagram />
				</a>
				<div className="time">{moment().format("LLLL")}</div>
			</div>
		</header>
	);
};

export default Menu;
