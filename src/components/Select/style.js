import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 5px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    > select {
        height: 48px;
        width: 100%;

        padding: 16px;

        font-weight: 500;
        font-size: 14px;

        border-radius: 5px;

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
            margin-right: 16px;
    }
`;