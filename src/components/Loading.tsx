import React, { FC } from "react";

export const Loading: FC = () => (
	<div className="flex justify-center items-center h-screen">
		<div className="spinner-border w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
	</div>
);
