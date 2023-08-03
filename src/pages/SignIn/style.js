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
        gap: 10px;

        margin-bottom: 73px;

        h1 {
            font-size: 36px;
            font-weight: 700;
        }
    }
`

export const Form = styled.form`
    max-width: 316px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 32px;

    animation: slide-bot 0.3s backwards;
`;
