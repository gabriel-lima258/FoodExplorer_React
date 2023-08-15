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

    h1 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: Poppins, sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
    }

    .btn-back{
        @media (min-width: 768px) {
            font-size: 2.4rem;
        }
    }

    .btn-edit {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
    width: 100%;

        @media (min-width: 768px) {
            width: 40vw;
            align-self: flex-end;
        }
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    width: 100%;

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
    }

    .image-div{
        position: relative;
    
    > img {
        position: absolute;
        left: 13rem;
        bottom: 6.2rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
     
        object-fit: cover;
        border: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    }

    @media (min-width: 768px) {
    flex-wrap: nowrap;
    column-gap: 3.2rem;
    }
`