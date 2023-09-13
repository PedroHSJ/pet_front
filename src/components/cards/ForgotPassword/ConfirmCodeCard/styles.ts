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

export const Title = styled.p`
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors?.black};
    font-size: ${({ theme }) => theme.fonts.size.normal};
`;

export const ForwardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    gap: 12px;
`;

export const ForwardText = styled.p`
    font-weight: bold;
    color: ${({ theme }) => theme.colors?.black};
    font-size: ${({ theme }) => theme.fonts.size.small};
`;

export const ForwardButton = styled.button`
    padding: 5px 8px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary_dark};
    transition: 0.3s all ease;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: 0.3s all ease;
    }
`;

export const ForwardButtonLabel = styled.p`
    color: ${({ theme }) => theme.colors?.white};
    font-size: ${({ theme }) => theme.fonts.size.small};
`;
