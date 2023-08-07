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
    margin: 0 2rem;

    flex: 1;

`
export const Slogan = styled.div`
    height: 12rem;
   
    margin-top: 4.4rem;
    margin-bottom: 4.8rem;

    padding-inline: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};

    > img {
        margin-bottom: 2.6rem;
    }

    > div {
        h1{
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }

        p{
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    }
`