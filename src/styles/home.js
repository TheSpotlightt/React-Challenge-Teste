import styled from 'styled-components';

export const Header = styled.header `
    margin-top: 3rem;
`;

export const ProductsSection = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 90%;

    @media only screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 1440px) and (max-width: 1711px) {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
`;

export const ProductsContainer = styled.div `
    display: flex;
    justify-content: center;

`

export const Paragraph = styled.p `
    font-size: 1.5rem;
    text-align: center;
`;

export const AddToCartContainer = styled.div `
    display: flex;
    justify-content: center;

`;

export const AddToCartButton = styled.button `
    width: 10rem;
    padding: 1rem;

    cursor: pointer;

    outline: none;
    border: .1rem solid #b3b3b4;

    background-image: linear-gradient(rgba(240,192,64,1) 50%, rgba(214,214,214,1) 50%);
    background-size: 100% 200%;
    transition: background-position .3s;

    &:hover {
        background-position: 0 100%;
    }

    @media only screen and (max-width: 800px) {
        background-image: linear-gradient(rgba(240,192,64,1) 50%, rgba(240,192,64,1) 50%);
    }
`;