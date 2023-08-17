import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 32%;
	min-width: 350px;
	padding: 20px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors?.background_secondary};
	// Mobile
	@media (max-width: 820px) {
		width: 100%;
		max-width: 820px;
		border-radius: 0;
		min-height: 100vh;
	}
`;

export const Title = styled.p`
	font-weight: bold;
	font-size: 15px;
	text-align: center;
`;

export const LogoImage = styled.img`
	display: flex;
	align-self: center;
	width: 135px;
	margin-bottom: 30px;
	// Mobile
	@media (max-width: 820px) {
		width: 190px;
	}
`;
