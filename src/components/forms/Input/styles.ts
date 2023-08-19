import styled from 'styled-components';

interface ContainerProps {
    hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    margin: 25px 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors?.white};

    border: ${({ hasError, theme }) =>
        hasError ? `1px solid ${theme.colors?.error}` : 'none'};
`;

export const Label = styled.h4`
    margin-bottom: 6px;
    padding: 10px 10px 0 10px;
    font-size: small;
    color: ${({ theme }) => theme.colors?.dark};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 12px 10px;
    outline: 0;
    font-size: medium;
    color: ${({ theme }) => theme.colors?.darker};
    border: none;
    background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const TextError = styled.p`
    margin: 10px;
    font-size: small;
    font-weight: bold;
    color: ${({ theme }) => theme.colors?.error};
    background-color: ${({ theme }) => theme.colors?.transparent};
`;

export const EyeButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
`;
