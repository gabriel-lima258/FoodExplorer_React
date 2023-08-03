import * as C from "./style";

import Polygon from  '../../assets/Polygon.svg'

import {FiMenu} from  "react-icons/fi"

import Receipt from "../../assets/Receipt.svg";

export function Header(){
    return(
        <C.Container>
            <div className="mobile">
                <C.IconButton>
                    <FiMenu/>
                </C.IconButton>

                <C.Logo>
                    <img src={Polygon} alt="Poligono logo"/>
                    <h1>food explorer</h1>
                    <span>admin</span>
                </C.Logo>


                <C.IconButton>
                    <img src={Receipt} alt="imagem de pedido"/>
                </C.IconButton>
            </div>
        </C.Container>
    );
}