export interface Props {
	text: string;
	age?: number;
}

export const handleInputChange = (
	event: React.ChangeEvent<HTMLInputElement>,
	setName: React.Dispatch<React.SetStateAction<string>>,
) => {
	setName(event.target.value);
};
