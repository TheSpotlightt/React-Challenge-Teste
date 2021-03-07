import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    html {
        font-size: 10px;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
`;