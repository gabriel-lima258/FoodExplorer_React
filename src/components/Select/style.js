import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: .5rem;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    > select {
        height: 4.8rem;
        width: 100%;

        padding: 1.6rem;

        font-weight: 500;
        font-size: 1.4rem;

        border-radius: .5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color:  ${({ theme }) => theme.COLORS.LIGHT_400};

        background: transparent;
        border: none;
        appearance: none;

        display: flex;
        align-items: center;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }

    }

    > svg {
            margin-right: 1.6rem;
    }
`;