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
 

    .noneOrders {
        justify-content: center;
        align-items: center;
        padding: 10rem;
        white-space: normal;
    }

    .noneOrders p {
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
    }

    h1 {
        margin-top: 3.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
    }

    select {
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;

    }

`

export const TableMobile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: auto;
    padding-inline: 2rem;

    .ordersMobile {
    border: .2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    font-size: 1.4rem;
    padding: .8rem 2rem;
    border-radius: .8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

 
    .col-3 {
        display: flex;
        align-items: center;
        gap: 3.1rem;
        margin-bottom: 1.6rem;
    }
    }
    

`

export const Table = styled.div`
    width: 100%;
    padding-inline: 2rem;

    table {
        display: block;
        overflow: auto;
        overflow: overlay;
        white-space: nowrap;
        
        width: 100%;
        max-height: 54.4rem;
        margin-top: 3.5rem;
        border: .2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.8rem;
        border-collapse: collapse;
    }

    table * {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    table th {
        position: sticky;
        top: 0px;

        height: 6.4rem;
        padding: 2.1rem 2.4rem;
        border-bottom: .2rem solid ${({ theme }) => theme.COLORS.DARK_1000};;
        
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    table th:first-child {
        width: auto;
    }

    table th:nth-child(2) {
        width: auto;
    }

    table th:nth-child(3) {
        width: 100%;
    }

    table th:last-child {
        width: auto;
    }

    table tr {
        border-bottom: .2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    table tr:last-child {
        border: none;
    }


    table td {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        height: auto;
        padding: 1.6rem 2.4rem;
      
    }

    table th:nth-child(-n+3),
    table td:nth-child(-n+3) {
        border-right: .2rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
`
