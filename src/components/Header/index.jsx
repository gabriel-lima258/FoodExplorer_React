import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import * as C from "./style";

import {FiMenu} from  "react-icons/fi"
import {PiReceiptBold} from  "react-icons/pi"

import Polygon from  '../../assets/Polygon.svg'

export function Header(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const {user, signOut} = useAuth()
    const navigate = useNavigate();

    return(
        <C.Container>
                
                <C.Logo to="/">
                    <button>
                        <FiMenu size={25}/>
                    </button>

                    <div className="logo">
                        <img src={Polygon} alt="Poligono logo"/>
                        <h1>food explorer</h1>
                        {
                            user.isAdmin ?
                            <span>admin</span>
                            :
                            <></>
                        }
                    </div>

                    <button>
                        {
                            user.isAdmin ?
                            <></>
                            : 
                            <PiReceiptBold size={25}/>
                        }
                    </button>
                </C.Logo>

        </C.Container>
    );
}