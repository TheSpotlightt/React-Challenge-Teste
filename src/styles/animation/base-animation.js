import styled from 'styled-components';

const BaseAnimation = styled.div `
    animation-duration: ${props => props.duration};
    animation-delay: ${props => props.delay};
`
BaseAnimation.defaultProps = {
    duration: '1s',
    delay: '0s'
}

export default BaseAnimation