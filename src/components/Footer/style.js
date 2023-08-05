import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    > span {
        font-family: 'Poppins';
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    color: ${({theme}) => theme.COLORS.LIGHT_700};

    > svg {
        width: 2rem;
        height: 2rem;
    }

    > h1 {
        font-size: 1.6rem;
    }
`