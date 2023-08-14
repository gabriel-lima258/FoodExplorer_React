import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";

import * as C from "./style";

import {FiMenu} from  "react-icons/fi"
import {PiReceiptBold} from  "react-icons/pi"

import Polygon from  '../../assets/Polygon.svg'

export function Header(){

    const {user, signOut} = useAuth()
    const {cart, orders} = useCart();

    const navigate = useNavigate();

    const isCartIsEmpty = cart.length === 0;

    function handleMenu(){
        navigate("/menu");
    }

    function handleOrderFood(){
        navigate("/order");
    }

    return(
        <C.Container>
                
                <C.Nav>
                    <button onClick={handleMenu}>
                        <FiMenu size={25}/>
                    </button>

                    <C.Logo to="/">
                        <img src={Polygon} alt="Poligono logo"/>
                        <h1>food explorer</h1>
                        {
                            user.isAdmin ?
                            <span>admin</span>
                            :
                            <></>
                        }
                    </C.Logo>

                        {
                            user.isAdmin ?
                            <></>
                            : 
                            <button>
                            <PiReceiptBold
                            size={25} 
                            onClick={handleOrderFood}
                            />
                                <span>{cart.length}</span>
                            </button>
                        }
                  
                </C.Nav>

        </C.Container>
    );
}