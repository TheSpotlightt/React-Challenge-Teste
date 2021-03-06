import styled from 'styled-components';

export const NavMenu = styled.nav `
    background-color: #000;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
`;

export const NavMenuActive = styled.nav `
    right: 0;

`;