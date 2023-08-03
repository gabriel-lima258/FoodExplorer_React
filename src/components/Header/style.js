import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    width: 100%;

    display: flex;
    justify-content: space-between;

    .mobile {
        grid-area: header;
        padding: 32px 30px;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: ${({theme}) => theme.COLORS.DARK_700};

        transition: ease 0.3s;

    } 

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
        font-size: 21px;
        font-weight: 700;
    }

    img {
        height: 24px;
        width: 24px;
    }

    span {
        font-size: 12px;
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
`

export const IconButton = styled.button`
    font-size: 30px;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

`