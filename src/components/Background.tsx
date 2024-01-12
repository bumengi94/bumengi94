import React, { FC, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "three";
import { Stars } from "@react-three/drei";

const Effect = ({ particles }) => {
	useFrame(() => {
		particles.current.rotation.x += 0.001;
		particles.current.rotation.y -= 0.001;
		particles.current.rotation.z += 0.001;
	});

	return null;
};

export const Background: FC = () => {
	const particles = useRef<Points>();

	return (
		<Canvas style={{ position: "absolute" }}>
			<ambientLight intensity={0.1} />
			<Stars ref={particles} />
			<Effect particles={particles} />
		</Canvas>
	);
};
