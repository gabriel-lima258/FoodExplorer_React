import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.4rem;

    border-radius: .8rem;
    padding: .6rem 1.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};

    > input {
        height: 4.8rem;
        width: 100%;

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
            margin-left: 1.2rem;
    }
`;