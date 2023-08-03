import { Container } from "./style";
import {AiOutlineSearch} from "react-icons/ai"

export function SearchInput({...rest}){
    return(
        <Container>
            <AiOutlineSearch/>
            <input type="text" placeholder="Busque por pratos ou ingredientes" {...rest}/>
        </Container>
    );
}