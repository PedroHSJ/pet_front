import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors?.background};
    position: absolute;
    top: 50px;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    gap: 20px;
    border-radius: 15px;
    transition: 0.3s all ease;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors?.light};
        transition: 0.3s all ease;
    }
    // Mobile
    @media (max-width: 820px) {
        top: 5px;
        left: 5px;
    }
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors?.primary};
    font-size: ${({ theme }) => theme.fonts?.size.normal};
    // Mobile
    @media (max-width: 820px) {
        display: none;
    }
`;
