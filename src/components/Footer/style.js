import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 24px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    > span {
        font-family: 'Poppins';
        font-size: 12px;
        line-height: 16px;
    }
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({theme}) => theme.COLORS.LIGHT_700};

    > svg {
        width: 20px;
        height: 20px;
    }

    > h1 {
        font-size: 16px;
    }
`