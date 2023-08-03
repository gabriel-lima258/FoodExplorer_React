import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    grid-template-rows: "100px 1 fr";
    grid-template-areas: 
    "header"
    "content";

    overflow-x: hidden;
`

export const Content = styled.main`
    grid-area: content;

    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

`