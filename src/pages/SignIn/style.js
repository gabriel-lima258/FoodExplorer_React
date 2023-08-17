import styled from 'styled-components';

export const  Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 1024px){
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.3rem;

    h1 {
        font-size: 3.6rem;
        font-weight: 700;
        animation:focus-in-expand 1.5s cubic-bezier(.25,.46,.45,.94) both;
    }

    @media(min-width: 1024px){
        flex-direction: row;
        gap: 1rem;
    }

    @keyframes focus-in-expand{0%{letter-spacing:-.5em;filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}
`

export const Form = styled.form`
    max-width: 31.6rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    h1 {
        display: none;
    }

    @media(min-width: 1024px){
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        padding: 6.4rem;
        max-width: 47rem;
        border-radius: 1.6rem;

        h1 {
            display: block;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            text-align: center;
            font-family: Poppins, sans-serif;
            font-size: 3.2rem;
            font-weight: 500;
        
        }
    }
    
    @-webkit-keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-left{0%{-webkit-transform:translateX(-1000px);transform:translateX(-1000px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
`

