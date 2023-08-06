import styled from 'styled-components';

export const Container = styled.div`
    width: 21rem;

    margin: 2rem 0;
    padding: 2.4rem;

    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 0.8rem;

    display: flex;
    
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    position: relative;

    flex: none;

  > button:first-child {
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1.4rem;
    
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > div {
    width: 8.8rem;
    img {
      width: 100%;
    }
  }

  > a {

    h3 {
    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;
    }
  }

  > strong {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

  }

  > .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

  
`