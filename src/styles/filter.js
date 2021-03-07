import styled from 'styled-components';

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin-top: 5rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Label = styled.label `
    font-size: 1.7rem;
`;

export const MenuLabel = styled.label`
    background-color: #F0F0F0;
    position: fixed;
    top: 1rem;
    left: 3rem;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 1rem 3rem rgba(240, 240, 240, 0.3);
    text-align: center;

    @media only screen and (max-width: 800px) {
        left: 1.5rem;
    }
`;

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    margin-top: 5rem;
    background-color: #d6d6d6;
    width: 25rem;;
    height: 50vh;
    position: fixed;
    top: 10;
    z-index: 1;

    @media only screen and (max-width: 800px) {
        position: absolute;
        right: 1rem;
        width: 95vw;
    }
`;

export const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "black")};
    width: 3rem;
    height: .2rem;
    display: inline-block;
    margin-top: 2.5rem;
    transition: all 0.3s;
    &::before,
    &::after {
        content: "";
        background-color: black;
        width: 3rem;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        transition: all 0.3s;
    }
    &::before {
        top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
        top: ${(props) => (props.clicked ? "0" : "0.8rem")};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
`;

export const Select = styled.select `
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    width: 100%;

    border-radius: .8rem;

    background-color: #fff;
    font-family: 'Poppins', sans-serif;

    outline: none;
`;