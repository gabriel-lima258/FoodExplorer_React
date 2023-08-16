import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border: ${({theme, $isnew}) => $isnew ? `.1rem dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: .8rem;
    padding: .2rem 1.6rem;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.LIGHT_100}
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.LIGHT_500}
    }

    > input {
        height: 3.2rem;
        width: 15rem;

        padding: 1rem 1.6rem;
        font-size: 1.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    
`