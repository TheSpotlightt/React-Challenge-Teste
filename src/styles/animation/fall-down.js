import styled, { keyframes} from 'styled-components';
import BaseAnimation from './base-animation';

const FallDownAnimation = keyframes `
    from {
        opacity: 0;
        transform: translateY(-400px);
    }

    to {
        opacity: 1;
        transform : translateY(0);
    }
`;

const FallDown = styled(BaseAnimation) `
    animation-name: ${FallDownAnimation};
    animation-timing-function: linear forwards;

    @media only screen and (max-width: 800px) {
        animation-name: none;
    }
`;

export default FallDown