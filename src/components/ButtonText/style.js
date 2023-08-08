import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;

    display: flex;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
`