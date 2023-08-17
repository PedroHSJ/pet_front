import styled from 'styled-components';
import { fadeIn, slideDown } from '../../../styles/animations';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 8px;
	margin: 20px 0;
	background-color: ${({ theme }) => theme.colors?.white};
`;

export const ButtonSelect = styled.button`
	padding: 10px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: none;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors?.transparent};
	&:hover {
		cursor: pointer;
	}
`;

export const Placeholder = styled.p`
	width: 84%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 5px;
	text-align: left;
	color: ${({ theme }) => theme.colors?.placeholder};
`;

export const Label = styled.h4`
	margin-bottom: 6px;
	padding: 10px 10px 0 10px;
	font-size: small;
	color: ${({ theme }) => theme.colors?.dark};
`;

export const RemoveValueButton = styled.div`
	max-width: 84%;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors?.white};
	&:hover {
		cursor: pointer;
	}
`;

export const SelectedValue = styled.p`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
	color: ${({ theme }) => theme.colors?.text_black};
	background-color: ${({ theme }) => theme.colors?.white};
`;

export const ModalWithValues = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 99;
	animation: ${fadeIn} 0.3s ease-out;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWithValuesContent = styled.div`
	width: 40%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: ${slideDown} 0.3s ease-out;
	background-color: ${({ theme }) => theme.colors?.white};
	// Mobile
	@media (max-width: 820px) {
		width: 90%;
	}
`;

export const ModalTitle = styled.p`
	margin-bottom: 10px;
	text-align: center;
	font-size: large;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.text_black};
`;

export const ModalDescription = styled.p`
	margin-bottom: 20px;
	text-align: center;
	font-size: medium;
	color: ${({ theme }) => theme.colors?.darker};
`;

export const ItemOption = styled.button`
	padding: 10px;
	margin: 5px 0;
	border-radius: 7px;
	border: none;
	background-color: ${({ theme }) => theme.colors?.primary_dark};
	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors?.primary};
	}
`;

export const LabelOption = styled.p`
	font-size: medium;
	color: ${({ theme }) => theme.colors?.lighter};
`;

export const TextError = styled.p`
	margin-top: 6px;
	font-size: small;
	font-weight: bold;
	color: ${({ theme }) => theme.colors?.error};
	background-color: ${({ theme }) => theme.colors?.transparent};
`;
