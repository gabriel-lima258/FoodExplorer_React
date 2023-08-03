import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 48px;

    padding: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
   
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    border-radius: 5px;
    border: 0;

    background-color: ${({theme, $exclude, $add}) => $add ? theme.COLORS.TOMATO_400 : $exclude ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &:disabled {
        opacity: 0.5;
    }
`