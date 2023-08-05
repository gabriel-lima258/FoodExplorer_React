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
    margin-top: 1rem;
    width: 100%;
    

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  
   
`

export const Form = styled.form`
    width: 100%;
    
    padding: 1.6rem 3.2rem;
    margin-bottom: 5.3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.6rem;

    .tags {
        height: 4.8rem;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 1.6rem;
       
        padding: .2rem .8rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: .8rem;

        overflow-x: auto;
    }

    .buttons {
        width: 100%;
        display: flex;
        gap: 3.2rem;
    }
    
`
