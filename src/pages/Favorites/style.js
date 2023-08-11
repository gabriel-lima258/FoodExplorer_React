import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin-inline: auto;

    display: grid;
    
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    overflow-x: hidden;

    overflow-y: auto;
`

export const Content = styled.main`
    grid-area: content;
    padding-inline: 3rem;

`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin-top: 3.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;

    }

    .section-orders{
        display: flex;
        flex-direction: column;
        
        @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
        flex-wrap: wrap;
        }
    }

`
