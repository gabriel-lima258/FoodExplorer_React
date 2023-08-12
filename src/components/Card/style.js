import styled from 'styled-components';

export const Container = styled.div`
    width: 23rem;

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

    @media(min-width: 1024px){
        width: 30rem;
    }
    

  .btn-favorites {
    display: flex;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
   
    background: transparent;
    border: none;
    color: ${({ theme, isFavorite }) => isFavorite ? theme.COLORS.TOMATO_200 : theme.COLORS.LIGHT_100};
  }

  .img {
    width: 8.8rem;

    @media(min-width: 1024px){
        width: 17rem;
    }
    
    img {
      width: 100%;
    }
  }

  .title {

    h3 {
    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;

    @media(min-width: 1024px){
        font-size: 2.4rem;
    }
    }
  }

  > p {
    text-align: center;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }


  > strong {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    @media(min-width: 1024px){
        font-size: 3.2rem;
    }

  }

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    @media(min-width: 1024px){
      width: 90%;   
    }
  

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