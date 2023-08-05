import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    width: 100%;

    display: flex;
    justify-content: space-between;

    .mobile {
        grid-area: header;
        padding: 3.2rem 3rem;

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
    gap: 1rem;

    h1 {
        font-size: 2.1rem;
        font-weight: 700;
    }

    img {
        height: 2.4rem;
        width: 2.4rem;
    }

    span {
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
`

export const IconButton = styled.button`
    font-size: 3.0rem;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({theme}) => theme.COLORS.LIGHT_100};

`