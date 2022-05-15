import React, { FC } from "react";

const Window: FC = () => {
	return (
		<main>
			<div className="window">
				<div className="header">
					<button className={"control close"} />
					<button className={"control minimize"} />
					<button className={"control maximize"} />
				</div>
				<div className="content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tempor
						consectetur, nisi nunc interdum nisl, eget egestas nunc nisl euismod nunc.
					</p>
				</div>
			</div>
		</main>
	);
};

export default Window;
