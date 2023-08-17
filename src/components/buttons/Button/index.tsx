import { ReactNode } from 'react';
import { Loading } from '../../resources/Loading';
import { ButtonContainer, Label } from './styles';
import { useTheme } from 'styled-components';

interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	type: 'button' | 'submit' | 'reset';
}

export const Button = ({
	children,
	onClick,
	loading,
	disabled,
	type,
}: IButtonProps): JSX.Element => {
	const { colors } = useTheme();
	return (
		<ButtonContainer
			loading={`${loading}`}
			disabled={loading || disabled}
			type={type}
			onClick={onClick}>
			{loading ? <Loading size={23} color={colors.white} /> : <Label>{children}</Label>}
		</ButtonContainer>
	);
};
