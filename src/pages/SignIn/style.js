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
    }

    @media(min-width: 1024px){
        flex-direction: row;
        gap: 1rem;
    }
    
`

export const Form = styled.form`
    max-width: 31.6rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    animation: slide-bot 0.3s backwards;

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

    

`;
