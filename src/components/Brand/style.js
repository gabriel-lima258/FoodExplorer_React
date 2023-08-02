import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 73px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    h1 {
        font-size: 36px;
        font-weight: 700;
      
    }

    span {
        font-size: 12px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
`