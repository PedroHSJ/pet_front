import styled from 'styled-components';
export const TextError = styled.p`
	margin-top: 6px;
	font-size: small;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.error};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;