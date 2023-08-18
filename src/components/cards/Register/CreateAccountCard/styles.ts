import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    padding: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
`;
