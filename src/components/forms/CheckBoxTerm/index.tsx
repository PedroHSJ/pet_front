import { useState } from 'react';
import { CheckButton, Container, TextContent, Label, LinkTerm } from './styles';
import { BsFillCheckSquareFill, BsSquare } from 'react-icons/bs';
import { useTheme } from 'styled-components';

export const CheckBoxTerm = () => {
	const { colors } = useTheme();
	const [isCheck, setIsCheck] = useState(false);

	const CheckBox = () => (
		<Container>
			<CheckButton onClick={() => setIsCheck(!isCheck)}>
				{isCheck ? (
					<BsFillCheckSquareFill color={colors?.primary} size={20} />
				) : (
					<BsSquare color={colors?.primary} size={20} />
				)}
			</CheckButton>
			<TextContent>
				<Label>Declaro que li e aceito o</Label>
				<LinkTerm to="/term">termo de consentimento livre</LinkTerm>
			</TextContent>
		</Container>
	);

	return {
		CheckBox,
		isCheck,
	};
};
