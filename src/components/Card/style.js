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

    animation:slide-in-elliptic-left-fwd 2s cubic-bezier(.25,.46,.45,.94) both;


    @media(min-width: 1024px){
        width: 32rem;
    }
    

  .btn-icon {
    display: flex;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
   
    background: transparent;
    border: none;

    > .btn-favorites {
      background: transparent;
      color: white;
    }
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
    text-align: center;

    h3 {
    font-family: Poppins, sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

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

  /* ----------------------------------------------
 * Generated by Animista on 2023-8-16 20:47:50
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@keyframes slide-in-elliptic-left-fwd{0%{transform:translateX(-800px) rotateY(30deg) scale(0);transform-origin:-100% 50%;opacity:0}100%{transform:translateX(0) rotateY(0) scale(1);transform-origin:1800px 50%;opacity:1}}
`