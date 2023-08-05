import styled from 'styled-components';

export const  Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .Logo {
        display: flex;
        align-items: center;
        gap: 1rem;

        margin-bottom: 7.3rem;

        h1 {
            font-size: 3.6rem;
            font-weight: 700;
        }
    }
`

export const Form = styled.form`
    max-width: 31.6rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    animation: slide-bot 0.3s backwards;

`;
