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
    padding-inline: 7rem;

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

`

export const TableMobile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.DARK_1000};
    

`

export const Table = styled.div`
    table {
        display: block;
        overflow: auto;
        overflow: overlay;
        white-space: nowrap;
        
        width: 100%;
        max-height: 54.4rem;
        margin-top: 3.5rem;
        border: .1rem solid ${({ theme }) => theme.COLORS.WHITE_100};
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
        border-bottom: .1rem solid ${({ theme }) => theme.COLORS.WHITE_100};
        
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background: ${({ theme }) => theme.COLORS.BLUE_200};
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
        border-bottom: .1rem solid ${({ theme }) => theme.COLORS.WHITE_100};
    }

    table tr:nth-child(even) {
        background: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    table tr:last-child {
        border: none;
    }


    table td {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        height: 8rem;
        padding: 1.6rem 2.4rem;
      
    }

    table th:nth-child(-n+3),
    table td:nth-child(-n+3) {
        border-right: .1rem solid ${({ theme }) => theme.COLORS.WHITE_100};
    }

    select {
        max-width: 17.5rem;
        background: transparent;
        color: wheat;

        border-radius: 0.8rem;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};

        padding: 1.3rem 1.6rem;
    }

   

`
