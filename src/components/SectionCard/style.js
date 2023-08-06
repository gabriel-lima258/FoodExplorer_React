import styled from 'styled-components';

export const Container = styled.section`
  padding-inline: 2rem;
  margin-bottom: 4rem;
  width: 94vw;
  
  > h2 {
    font-size: 1.8rem
  }

`
export const Slider = styled.div`
  position: relative;


  > div {
    display: flex;

    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .button-left, .button-right {
    position: absolute;
    z-index: 5;

    padding-inline: .1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
  }

  .button-left {
    top: 10rem;
    left: -1rem;

    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  .button-right {
    top: 10rem;
    right: -1rem;

    justify-content: flex-end;

    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  @media (min-width: 768px) {
    .button-left, .button-right {
      display: flex;
      align-items: center;
      transition: all ease 0.5s;

      opacity: 0;
    }

    &:hover {
      .button-left, .button-right {
        opacity: 1;
      }
    }

  }
`