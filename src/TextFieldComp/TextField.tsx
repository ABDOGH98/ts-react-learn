import React, { useState } from "react";
import { handleInputChange, Props } from "./TextField-Handler";

const TextField: React.FC<Props> = ({ text }) => {
	const [name, setName] = useState<string>("");

	return (
		<>
			<h1>{text}</h1>
			<h3>{name}</h3>
			<input
				type="text"
				onChange={(event) => handleInputChange(event, setName)}
			/>
		</>
	);
};

export default TextField;
