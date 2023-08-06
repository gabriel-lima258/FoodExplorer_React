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

    padding-inline: 2rem;
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    > .buttons {

        button {
            width: 100%;
            padding: 1rem;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            background: none;
            font-family: Poppins;
            font-size: 2.4rem;
            font-weight: 300;

            display: flex;

            border-bottom-width: .1rem;
            border-bottom-style: solid;
            border-bottom-color: ${({theme}) => theme.COLORS.DARK_1000};
        }
    }

`
export const Header = styled.header`
    grid-area: header;

    padding-inline: 2rem;

    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.6rem;
    
 
    background: ${({theme}) => theme.COLORS.DARK_700};

    transition: ease 0.3s;

    > button {
        display: flex;
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 2.1rem;
        font-weight: 400;
        line-height: normal;
    }
    
`