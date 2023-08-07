import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    padding: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
   
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    border-radius: .5rem;
    border: 0;

    background-color: ${({theme, $exclude, $add}) => $add ? theme.COLORS.TOMATO_400 : $exclude ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &:disabled {
        opacity: 0.5;
    }
`