import styled from 'styled-components';

export const  Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    max-width: 316px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 44px;

    animation: slide-bot 0.3s backwards;
`;
