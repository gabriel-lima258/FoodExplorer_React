import { styled } from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    resize: none;

    border-radius: .8rem;
    padding: 1.4rem;

    &::placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`