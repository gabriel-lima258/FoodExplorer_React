import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: .8rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};

    > input {
        height: 4.8rem;
        width: 100%;

        padding: 1.2rem 1.4rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-size: 1.6rem; 
        }
    }
  
    > svg {
            margin-left: 1.6rem;
    }
`;