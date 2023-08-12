import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

import * as C from './style'

import { OrderItem } from '../../components/OrderItem';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Button } from '../../components/Button';

export function Order(){

    const {user} = useAuth()

    const { cart, total, handleResetCart } = useCart();

    const { loading, setLoading } = useState(false);

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

                <C.Content>
                    <C.Orders>
                        <h3>Meu Pedido</h3>

                        <div className="session-orders">

                            {
                                cart &&
                                    cart.map(item => (
                                        <OrderItem
                                        key={String(item.id)}
                                        data={item}
                                        />
                                    ))
                            }
                           
                        </div>

                        <div className="total">
                            <p>Total R$ <span>{total}</span></p>
                        </div>

            
                            <Button 
                            title="Avançar"
                            className="btn-payment"
                            />  
                        
                    </C.Orders>
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}