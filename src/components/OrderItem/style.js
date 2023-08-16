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
  > .description {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  > button {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`