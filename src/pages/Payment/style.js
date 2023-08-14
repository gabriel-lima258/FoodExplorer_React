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
    width: 100%;

    display: flex;
    justify-content: space-around;
    padding-inline: 3rem;

    .btn-payment {
        margin-top: 3rem;
        
        align-self: end;
        
        width: 21.6rem;
    }
    
    h3 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
    }

    @media(max-width: 768px){
        justify-content: flex-start;
    }


`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.6rem;
    width: 100%;
    

    .total {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 2rem;
        font-weight: 500;
    }

    @media(min-width: 767px){
        width: auto;
    }


 
    
`

export const Payment = styled.div`
    width: 35rem;
    margin-top: 3.6rem;

    display: flex;
    flex-direction: column;
    align-items: start;

    @media(min-width: 1024px){
        width: 53rem;
    }

    span {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        font-weight: 400;
    }

    .container {
        width: 100%;
        margin-top: 3.2rem;
        border: .1rem solid ${({theme}) => theme.COLORS.LIGHT_600};
        border-radius: .8rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3.1rem 3rem;

        @media(min-width: 1024px){
        padding: 5.9rem 9rem;
        }
    }

    #paymentPix img {
            width: clamp(5rem, 5rem + 20vw, 27rem);
            height: clamp(5rem, 5rem + 20vw, 27rem);

            margin-bottom: 2rem;
        }

    .credit-card{
        display: flex;
        flex-direction: column;
        gap: 3.7rem;


        .date-card {
        display: flex;
        flex-direction: row;
        gap: 1.7rem;
        }
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
