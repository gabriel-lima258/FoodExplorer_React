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
    margin: 8rem auto;

    width: 100%;
    height: 100%;
    
    padding: 1.1rem 5.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  

    img {
        height: 26.3rem;
        width: 26.3rem;
    }

    .btn-back {
        position: absolute;
        left: 3rem;
        top: 13rem;
        background: none;

        display: flex;
        align-items: center;

        strong{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 2.4rem;
            font-weight: 500;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.4rem;

        margin-bottom: 4.8rem;


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
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
        }

        > .order {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;

            span {
            font-size: 2rem;
            font-weight: 700;
            }

            .btn {
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            display: flex;
            align-items: center;
            }
        }
    }

    @media(min-width: 1024px){
        margin: 2rem auto;
        flex-direction: row;
        gap: 6rem;

        img {
        height: 39rem;
        width: 39rem;
        }

        .order {
            margin-top: 3rem;
        }

        .info {
            align-items: flex-start;

            h1 {
                font-size: 4rem;
            }
            p {
                font-size: 2.4rem;
                text-align: start;
            }

            .tags {
                gap: 1rem .2rem;
                justify-content: start;
            }

            .btn-edit {
                width: 16rem;
            }
        }


    }



    
`