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

    overflow-y: auto;

    &::-webkit-scrollbar{
    width: 4px;   
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_500};
    }
    &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 10px;
    }

`

export const Content = styled.main`
    grid-area: content;
    margin-top: 10px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  
   
`

export const Form = styled.form`
    width: 100%;
    
    padding: 16px 32px;
    margin-bottom: 53px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;

    .tags {
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 16px;
       
        padding: 2px 8px;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: 8px;
    }
    
`
