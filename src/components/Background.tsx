import React, { FC } from "react";

export const Background: FC = () => (
	<div className="bg-gradient-to-br from-theme1 to-theme h-screen overflow-hidden relative">
		<span className="w-32 h-32 bg-white block rounded-md opacity-40 absolute top-full left-1/4 animate-[square_15s_linear_infinite_1s]" />
		<span className="w-48 h-48 bg-white block rounded-md opacity-40 absolute top-full left-2/3 animate-[square_15s_linear_infinite_2s]" />
		<span className="w-12 h-12 bg-white block rounded-md opacity-40 absolute top-full left-1/4 animate-[square_15s_linear_infinite_3s]" />
		<span className="w-24 h-24 bg-white block rounded-md opacity-40 absolute top-full left-2/4 animate-[square_15s_linear_infinite_4s]" />
		<span className="w-36 h-36 bg-white block rounded-md opacity-40 absolute top-full left-3/4 animate-[square_15s_linear_infinite_5s]" />
		<span className="w-24 h-24 bg-white block rounded-md opacity-40 absolute top-full left-1/3 animate-[square_15s_linear_infinite_6s]" />
		<span className="w-12 h-12 bg-white block rounded-md opacity-40 absolute top-full left-3/4 animate-[square_15s_linear_infinite_7s]" />
		<span className="w-48 h-48 bg-white block rounded-md opacity-40 absolute top-full left-2/4 animate-[square_15s_linear_infinite_8s]" />
	</div>
);
