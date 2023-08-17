import styled, { css } from 'styled-components';
import { spin } from '../../../styles/animations';

interface ISpinnerProps {
	color: string;
	size: number;
}

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const Spinner = styled.div<ISpinnerProps>`
	${({ color, size }) => {
		return css`
			background: linear-gradient(
				180deg,
				${color} 0%,
				rgba(0, 0, 0, 0.1) 25%
			);
			width: ${size}px;
			height: ${size}px;
		`;
	}};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	animation: ${spin} 1s linear infinite;
	::after {
		content: '';
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		border-radius: 50%;
		background: #f9fafa;
	}
`;
