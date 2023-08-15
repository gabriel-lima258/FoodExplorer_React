import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    padding: 3.2rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({theme}) => theme.COLORS.DARK_700};

    transition: ease 0.3s;
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
 
    button {
        background: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    .btn-cart {
        background: none;
        position: relative;
        font-size: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
        position: absolute;

        width: 1.5rem;
        height: 1.5rem;
        
        bottom: 1.4rem;
        left: 1.4rem;
       
        border-radius: 10rem;
        background-color: ${({theme}) => theme.COLORS.TOMATO_200};
    }
    }

    
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
    }
        
    span {
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.CAKE_200};
    }

`

