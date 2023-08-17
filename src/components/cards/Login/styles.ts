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
		min-height: 88vh;
	}
`;

export const Logo = styled.img`
	display: flex;
	align-self: center;
	width: 135px;
	// Mobile
	@media (max-width: 820px) {
		width: 190px;
	}
`;

export const ViewTerms = styled.div`
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	flex-wrap: wrap;
	width: 100%;
`;