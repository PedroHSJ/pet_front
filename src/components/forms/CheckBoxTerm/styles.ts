import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 15px 0;
	gap: 10px;
`;

export const TextContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 5px;
	// Mobile
	@media (max-width: 1420px) {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 0;
	}
`;

export const Label = styled.p`
	color: ${({ theme }) => theme.colors?.dark};
`;

export const CheckButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

export const LinkTerm = styled(Link)`
	color: ${({ theme }) => theme.colors?.primary};
`;
