import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding: 12px;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    border-radius: 5px;

    background-color: ${({theme, $exclude, $add}) => $add ? theme.COLORS.TOMATO_400 : $exclude ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`