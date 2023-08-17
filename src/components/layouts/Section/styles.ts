import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: scroll;
    overflow-x: hidden;
`;

// display: flex;
// flex-direction: column;
// align-items: left;
// width: 100%;
// height: 100%;
// padding: 5vh 10px;

// max-width: 1024px;
// min-height: 93vh; // Para descontar 5vh do Header
// @media (max-width: 820px) {
//     padding: 20px 0;
//     margin: 0 10px;
//     width: 95vw;
// }
// @media (max-height: 415px) {
//     padding: 20px 0;
//     margin: 0 10px;
// }
