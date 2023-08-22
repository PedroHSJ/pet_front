import styled from 'styled-components';

interface IContainerProps {
    flexDirection?: string;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    height: 100vh;
    overflow: hidden;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
`;
