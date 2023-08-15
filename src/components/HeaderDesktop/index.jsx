import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as C from "./style";

import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import {BsSearch} from  "react-icons/bs"
import {PiReceiptBold} from  "react-icons/pi"
import { FiLogOut } from "react-icons/fi";

import Polygon from  '../../assets/Polygon.svg'

export function HeaderDesktop({search}){

    const {user, signOut} = useAuth()
    const {cart, orders} = useCart();

    const navigate = useNavigate();

    function handleSignOut(){
        signOut();
        navigate("/");
    }

    function handleOrderFood(){
        navigate("/payment");
    }

    function handleNewFood(){
        navigate("/new");
    }

    function handleFavoriteFood(){
        navigate("/favorite");
    }

    function handleStatusFood(){
        navigate("/order")
    }

    return(
        <C.Container>
                
                <C.Nav>
                    <C.Logo to="/">
                        <img src={Polygon} alt="Poligono logo"/>
                        {
                            user.isAdmin ?
                            <h1>food explorer
                                <span>admin</span>
                            </h1>
                            :
                            <h1>food explorer</h1>
                        }
                    </C.Logo>


                    <Input
                        placeholder="Busque por pratos ou ingredientes"
                        type="text"
                        icon={BsSearch}
                        onChange={e => {search(e.target.value)}}
                    />

                    
                    <ButtonText title="Meus favoritos" onClick={handleFavoriteFood}/>
                    
                    <ButtonText title="Históricos de pedidos" onClick={handleStatusFood}/>

                        {
                            user.isAdmin ?
                            <Button
                                title="Novo prato"
                                onClick={handleNewFood}
                            />
                            : 
                            <Button 
                                title={`Meus pedidos (${cart.length})`}
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
                </C.Nav>

        </C.Container>
    );
}