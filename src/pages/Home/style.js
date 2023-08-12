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

    @media(min-width: 1023px){
      grid-template-rows: 9.6rem auto 7.7rem;
    }
`

export const Content = styled.main`
    grid-area: content;

    margin: 0 auto;
    max-width: 36rem;

    @media (max-width: 768px) {
      max-width: 58rem;
    }

    @media (min-width: 768px) {
      max-width: 75rem;
    }

    @media (min-width: 1024px) {
      max-width: 90rem;
    }

    @media (min-width: 1300px) {
      max-width: 123rem;
    }
`
export const Slogan = styled.div`
    height: 12rem;
    position: relative;
  
    margin-top: 4.4rem;
    margin-bottom: 4.8rem;
    align-items: end;

    border-radius: 1.2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.GRADIENTS_200};

    @media(min-width: 1024px){
        margin-top: 7.2rem;
        margin-bottom: 6.3rem;
        padding-right: 5rem;
        height: 24rem;
        justify-content: end;
        align-items: center;
    }

    @media (min-width: 1300px) {
        padding-right: 18rem;
    }

    > img {
        margin-bottom: 2.6rem;

            @media(min-width: 1024px){
                position: absolute;
                width: 40rem;
                height: 40rem;
                left: -5rem;
                bottom: -7rem;
                opacity: 0.8;
            }

            @media (min-width: 1300px) {
                position: absolute;
                width: 63rem;
                height: 30rem;
                left: -15rem;
                bottom: -3rem;
                opacity: 0.9;
            }
    }

    .slogan {
        display: flex;
        align-items: end;
    }

    .title {
        h1{
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            @media(min-width: 1024px){
                font-size: 4rem;
            }
        }

        p{
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            @media(min-width: 1024px){
                font-size: 1.6rem;
            }
        }

        
    }
`