import styled from 'styled-components';

export const Container = styled.span`
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 5px;
    margin-right: 6px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
`