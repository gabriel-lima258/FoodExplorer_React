import { Container, Brand } from "./style";

import Polygon from "../../assets/Polygon_gray.svg";

export function Footer(){
    return(
        <Container>
            <Brand>
                <img src={Polygon} alt="Figura logo cinza"/>
                <h1>food explorer</h1>
            </Brand>
            
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}