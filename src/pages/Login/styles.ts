import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors?.background};
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
	width: 32%;
	min-width: 350px;
	// Mobile
	@media (max-width: 820px) {
		align-items: center;
		width: 100%;
		max-width: 820px;
		margin-top: 0;
		border-radius: 0;
		height: 12vh;
		padding: 30px 20px;
	}
`;
