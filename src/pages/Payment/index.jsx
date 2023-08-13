import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import * as C from './style'

import { OrderItem } from '../../components/OrderItem';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Button } from '../../components/Button';

import { MdPix } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';

import clock from '../../assets/Clock.svg';
import approved from '../../assets/Approved.svg';
import fork from '../../assets/fork.svg';
import qrCode from '../../assets/qrCode.svg';


export function Order(){
    const [loading, setLoading] = useState(false);

    const { cart, total, paymentAccept, setPaymentAccept, handleResetCart } = useCart();
    const { user } = useAuth()

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})


    // mudanças de botões e mudanças de telas

    const [isPixVisible, setIsPixVisible] = useState(false);
    const [isCreditVisible, setIsCreditVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(true);
    const [pixActive, setPixActive] = useState(false);
    const [creditActive, setCreditActive] = useState(false);
    const [isClockActive, setIsClockActive] = useState(false);
    const [isApprovedActive, setIsApprovedActive] = useState(false);

    const handlePaymentPix = () => {
        setIsPixVisible(true);
        setPixActive(true);
        setIsCreditVisible(false);
        setCreditActive(false);
        setIsCartVisible(false);
    }

    // arrow function para mudar condições

    const handlePaymentCreditCard = () => {
        setIsCreditVisible(true);
        setCreditActive(true);
        setIsPixVisible(false);
        setPixActive(false);
        setIsCartVisible(false);
    }

    // desabilitar botões e mudar telas

    const [disabledButton, setDisabledButton] = useState(false);

    const disabledbutton = () => {
        setDisabledButton(true);

        setIsCreditVisible(false);
        setIsPixVisible(false);

        setIsClockActive(true);
        setIsApprovedActive(false);
        setTimeout(() => {
            // elementos que serão mudados com delay de tempo
            setIsClockActive(false);
            setIsApprovedActive(true);
        }, 4000);
    }


    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

                <C.Content>
                    <C.Orders>
                        <h3>Meu Pedido</h3>

                        <div className="section-orders">

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

                    <C.Payment>

                            <h3>Pagamento</h3>

                            <div className="container">
                                <div className="btn-option-payment">
                                    <Button 
                                    className={pixActive === true ? 'active' : ''} // se for ativo muda o nome da clase
                                    title="PIX" 
                                    icon={MdPix}
                                    disabled={disabledButton} // por padrão os botões já inciam desabilitados
                                    onClick={handlePaymentPix}
                                    /> 

                                    <Button
                                    className={creditActive === true ? 'active' : ''} 
                                    title="Crédito" 
                                    icon={BsCreditCard}
                                    disabled={disabledButton}
                                    onClick={handlePaymentCreditCard}
                                    />   
                                </div>

                                <div className="content">

                                    <img src={qrCode} alt="" />

                                </div>


                            </div>


                    </C.Payment>

            
                    
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}