import { Container, Label } from './styles';

interface ILinkButtonProps {
	label: string;
	type: 'button' | 'submit' | 'reset';
	path: string;
	onClick?: () => void;
}

export const LinkButton = ({
	label,
	type,
	path,
	onClick,
}: ILinkButtonProps): JSX.Element => {
	return (
		<Container to={path} type={type} onClick={onClick}>
			<Label>{label}</Label>
		</Container>
	);
};
