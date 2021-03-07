import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;

    margin-top: 3rem;
`;


export const Poster = styled.img `
    &:hover {
        transform: scale(1.1);    
        transition: all 400ms ease-out;
        filter: drop-shadow(30px 10px 4px #454543);
    }

    @media only screen and (max-width: 800px) {
        &:hover {
            transform: none;    
            transition: none;
            filter: none;
        }
    }

`;