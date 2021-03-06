import styled from 'styled-components';

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin-top: 5rem;
    margin-left: 3rem;
`;

export const Label = styled.label `
    font-size: 1.7rem;

`;

export const Select = styled.select `
    font-size: 1.5rem;
    width: 50%;

    border-radius: .8rem;

    background-color: #fff;
    font-family: 'Poppins', sans-serif;

    outline: none;
`;