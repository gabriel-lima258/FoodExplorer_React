import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > h2 {
        padding-bottom: 16px;
        font-size: 16px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;