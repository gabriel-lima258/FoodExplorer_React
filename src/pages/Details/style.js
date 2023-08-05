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

`

export const Content = styled.main`
    grid-area: content;
    margin: 3.2rem auto;


    width: 100%;
    height: 100%;
    
    padding: 1.1rem 5.6rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .button {
        font-size: 2.4rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;

        margin-bottom: 4.8rem;

        img {
            height: 26.3rem;
            width: 26.3rem;
        }

        h1 {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 2.7rem;
            font-weight: 500;
        }

        p {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            text-align: center;
            font-family: Poppins;
            font-size: 1.6rem;
            font-weight: 400;
        }

        > .tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.4rem;
        }
    }
 

`