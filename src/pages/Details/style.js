import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    

    grid-template-rows: 114px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    overflow-x: hidden;

`

export const Content = styled.main`
    grid-area: content;
    margin: 32px auto;


    width: 100%;
    height: 100%;
    
    padding: 11px 56px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .button {
        font-size: 24px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        margin-bottom: 48px;

        img {
            height: 263px;
            width: 263px;
        }

        h1 {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 27px;
            font-weight: 500;
        }

        p {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            text-align: center;
            font-family: Poppins;
            font-size: 16px;
            font-weight: 400;
        }

        > .tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
        }
    }
 

`