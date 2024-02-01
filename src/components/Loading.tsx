import React, { FC } from "react";

export const Loading: FC = () => (
	<span className="flex items-center justify-center h-screen after:rounded-full after:w-12 after:h-12 after:bg-theme after:block after:animate-ping" />
);
