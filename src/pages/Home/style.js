import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    overflow-x: hidden;

    overflow-y: auto;

    &::-webkit-scrollbar{
    width: .4rem;   
    border: .1rem solid ${({theme}) => theme.COLORS.LIGHT_500};
    }
    &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 1rem;
    }
`

export const Content = styled.main`
    grid-area: content;

    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Slogan = styled.div`
    width: 94vw;
    height: 12rem;

    margin-top: 4.4rem;

    padding-inline: 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};

    > img {
        margin-bottom: 2rem;
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