import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > h2 {
        padding-bottom: 1.6rem;
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;