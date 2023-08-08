import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useMediaQuery } from 'react-responsive';

import * as C from './style'

import {AiOutlineClose} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

import { Input } from '../../components/Input';
import { OrderItem } from '../../components/OrderItem';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Button } from '../../components/Button';

export function Order(){

    const {user, signOut} = useAuth()
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    function handleHome(){
        navigate("/");
    }

    function handleSignOut(){
        signOut();
        handleHome();
    }

   

    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

                <C.Content>
                    <C.Orders>
                        <h3>Pedidos</h3>

                        <div className="session-orders">
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                        </div>

                        <div className="total">
                            <p>Total R$ <span>30.00</span></p>
                        </div>

                        <div className="btn">
                            <Button title="Avançar"/>  
                        </div>
                    </C.Orders>
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}