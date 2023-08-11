import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useMediaQuery } from 'react-responsive';

import * as C from './style'

import { OrderItem } from '../../components/OrderItem';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";

export function Favorite(){

    const {user} = useAuth()
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})



   

    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

                <C.Content>
                    <C.Orders>
                        <h3>Meus favoritos</h3>

                        <div className="section-orders">
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                            <OrderItem/>
                        </div>

                    </C.Orders>
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}