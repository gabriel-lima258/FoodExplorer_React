import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import * as C from "./style";

import { Input } from "../Input";
import { Button } from "../Button";

import {BsSearch} from  "react-icons/bs"
import {PiReceiptBold} from  "react-icons/pi"

import Polygon from  '../../assets/Polygon.svg'
import { ButtonText } from "../ButtonText";
import { FiLogOut } from "react-icons/fi";

export function HeaderDesktop(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const {user, signOut} = useAuth()
    const navigate = useNavigate();

    function handleSignOut(){
        signOut();
        navigate("/");
    }

    function handleOrderFood(){
        navigate("/order");
    }

    return(
        <C.Container>
                
                <C.Logo>
                    <div className="logo">
                        <img src={Polygon} alt="Poligono logo"/>
                        {
                            user.isAdmin ?
                            <h1>food explorer
                                <span>admin</span>
                            </h1>
                            :
                            <h1>food explorer</h1>
                        }
                    </div>


                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        type="text"
                        icon={BsSearch}
                    />

                        {
                            user.isAdmin ?
                            <Button
                                title="Novo prato"
                            />
                            : 
                            <Button 
                                title="Meus pedidos" 
                                onClick={handleOrderFood}
                                icon={PiReceiptBold}
                            >
                                <PiReceiptBold size={25}/>
                            </Button>
                        }

                        <ButtonText
                            icon={FiLogOut}
                            onClick={handleSignOut}
                        />
                </C.Logo>

        </C.Container>
    );
}