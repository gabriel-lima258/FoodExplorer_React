import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;

    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
`