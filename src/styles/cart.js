import styled from 'styled-components';

export const Header = styled.header `
    display: flex;
    justify-content: flex-end;
    align-items: center;

    align-items: center;
    margin: 2.5rem 0 3rem 0;
`;

export const Container = styled.div `
    position: fixed;

`

export const CartImg = styled.img `
    width: 60%;
    height: 60%;

    position: relative;
    bottom: 3.5rem;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
        left: 2rem;
        bottom: 5rem;
    }
`;

export const Span = styled.span `
    font-size: 2rem;
    position: relative;
    bottom: 8rem;
    left: 4rem;

    @media only screen and (max-width: 800px) {
        left: 6rem;
        bottom: 9.5rem;

    }
`;


export const Title = styled.h1 `
    font-size: 2rem;
    text-align: center;
`;

export const Paragraph = styled.p `
    font-size: 1.5rem;
    text-align: center;
`;

export const ParagraphBuyInfos = styled.p `
    font-size: 1.5rem;
    margin-left: 1rem;
`;

export const Ul = styled.ul `
    list-style-type: none;

`;

export const List = styled.li `

`;

export const RemoveFromCartContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;

`;

export const RemoveFromCartButton = styled.button `
    width: 8rem;
    padding: 1rem;

    cursor: pointer;

    outline: none;
    border: .1rem solid #b3b3b4;

    background-image: linear-gradient(rgba(106,106,104,1) 50%, rgba(170,167,167, 1) 50%);
    background-size: 100% 200%;
    transition: background-position .3s;

    &:hover {
        background-position: 0 100%;
    }

    @media only screen and (max-width: 700px) {
        width: 8rem;
        padding: 1rem;

        outline: none;
        border: .1rem solid #b3b3b4;
    }

`;



