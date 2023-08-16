import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > div {

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;

      object-fit: cover;
    }
  }
`

export const Content = styled.div`
    
  > .favorite-item {

    display: flex;
    flex-direction: column;
    
    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: Poppins;
        font-size: 2rem;
        font-weight: 500;
    }
    
    button {
        margin-top: .5rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
}
`