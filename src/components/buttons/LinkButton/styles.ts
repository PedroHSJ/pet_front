import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	border: none;
	text-decoration: none;
	padding: 0;
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		background-color: ${({ theme }) => theme.colors?.transparent};
	}
`;

export const Label = styled.p`
	text-align: left;
	font-size: medium;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.primary};
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.colors?.primary_dark};
	}
`;
