import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 16px;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
	background-color: ${({ theme }) => theme.colors?.white};
`;

export const Img = styled.img`
	width: 150px;
	border-radius: 10px;
`;

export const IformationContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	margin-left: 20px;
	line-height: 1.3;
`;

export const ProfessionalName = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.normal};
	font-weight: bold;
	color: ${({ theme }) => theme.colors.dark};
`;

export const InfoLine = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
`;

export const InfoText = styled.p`
	font-size: ${({ theme }) => theme.fonts.size.small};
	color: ${({ theme }) => theme.colors.regular};
`;
