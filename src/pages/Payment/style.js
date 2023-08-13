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

    display: flex;
    justify-content: space-between;
    padding-inline: 3rem;

    .btn-payment {
        margin-top: 3rem;
        
        align-self: end;
        
        width: 21rem;
    }
    
    h3 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
    }


`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.6rem;

    .total {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 2rem;
        font-weight: 500;
    }
    
`

export const Payment = styled.div`
    width: 35rem;
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: start;

    .container {
        width: 100%;
        margin-top: 3.2rem;
        border: .1rem solid ${({theme}) => theme.COLORS.LIGHT_600};
        border-radius: .8rem;
    }

    .content {
        display: flex;
        justify-content: center;
        padding: 3.2rem;
    }

    .btn-option-payment {
        width: 100%;
        display: flex;
        border-bottom: .1rem solid ${({theme}) => theme.COLORS.LIGHT_600};
        

        button.active{
            background-color: ${({theme}) => theme.COLORS.TOMATO_200};
        }
        
        button {
            background-color: transparent;
        }

        button:first-child{
            border-right: .1rem solid ${({theme}) => theme.COLORS.LIGHT_600};
            border-radius: .8rem 0 0 0;
        }

        bottom:last-child{
            border-radius: 0 .8rem 0 0;
        }

    }

`
