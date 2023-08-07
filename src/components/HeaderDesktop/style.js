import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    padding: 3.2rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({theme}) => theme.COLORS.DARK_700};

    transition: ease 0.3s;
`

export const Logo = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 3fr 2fr auto ;

    width: 100%;

    gap: 3rem;
    padding: 2.4rem 12.4rem;

    > .logo {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
        height: 3rem;
        width: 3rem;
        }

        > h1 {
        font-size: 2.4rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
     
        align-items: end;

            
        span {
            font-size: 1.2rem;
            color: ${({theme}) => theme.COLORS.CAKE_200};
        }

        }


    }
`
