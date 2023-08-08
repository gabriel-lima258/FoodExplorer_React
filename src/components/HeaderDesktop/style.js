import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    padding: 2.4rem 12rem;

    display: flex;
    align-items: center;

    background: ${({theme}) => theme.COLORS.DARK_700};

    transition: ease 0.3s;
`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    img {
    height: 3rem;
    width: 3rem;
    }

    h1 {
    font-size: 2.4rem;
    font-weight: 700;
    display: flex;

    align-items: end;
    }
        
    span {
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }

`

export const Nav = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    gap: 3.2rem;
    align-items: center;

    width: 100%;

`
