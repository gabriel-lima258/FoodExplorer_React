import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { api } from '../../services/api';

import * as C from './style'

import { OrderItem } from '../../components/OrderItem';
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { MdPix } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import { PiReceiptBold } from 'react-icons/pi';

import clock from '../../assets/Clock.svg';
import qrCode from '../../assets/qrCode.svg';
import approved from '../../assets/Aproved.svg';


export function Order(){
    const [loading, setLoading] = useState(false);

    const { cart, total, paymentAccept, setPaymentAccept, handleResetCart } = useCart();
    const { user } = useAuth()

    const navigate = useNavigate();

    const isDesktop = useMediaQuery({ maxWidth: 1023})
    const isMobile = useMediaQuery({ maxWidth: 767})

    // capturando os itens do carrinho

    function handleCreatedCart(cart){
        return{
            orderStatus: '🔴 Pendente',
            paymentMethod: pixActive ? 'pix': 'creditCard',
            totalPrice: total,
            cart: cart.map(item => (
                {
                id: item.id,
                title: item.title,
                quantity: item.quantity
                }
            ))
        }
    }

    // Payment Finalization Function
    async function handleFinishPayment(cart) {
        setPaymentAccept(true);
        
        const newCart = handleCreatedCart(cart)    

        if (cart.length < 1) {
            navigate(-1);
            return alert("Oops! Seu carrinho está vazio. Adicione algo antes de tentar pagar.");
        }

        if (!pixActive && num.length < 16) {
            alert("Erro: Número de cartão incompleto!");
            return;
        }

        if (!pixActive && date.length < 4) {
            return alert("Erro: Validade do cartão incompleta!");
        }

        if (!pixActive && cvc.length < 3) {
            return alert("Erro: CVC do cartão incompleto!");
        }

        setLoading(true);

        await api.post("/orders", newCart)
            .then(() => {
                disableButton();
                setTimeout(() => {    
                    // Elements that will be changed
                    alert("Pedido cadastrado com sucesso!");
                    navigate(-1);
                    handleResetCart();

                    // Delay
                }, 7000);
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });

        setLoading(false);
    }

    // CreditCard Validations
    const [num, setNum] = useState('');
    const [cvc, setCvc] = useState('');

    const handleNumChange = event => {
        const limit = 16;
        setNum(event.target.value.slice(0, limit));
    };

    const handleCvcChange = event => {
        const limit = 3;
        setCvc(event.target.value.slice(0, limit));
    };


    // mudanças de botões e mudanças de telas

    const [isPixVisible, setIsPixVisible] = useState(false);
    const [isCreditVisible, setIsCreditVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(true);
    const [pixActive, setPixActive] = useState(false);
    const [creditActive, setCreditActive] = useState(false);
    const [isClockActive, setIsClockActive] = useState(false);
    const [isApprovedActive, setIsApprovedActive] = useState(false);

    const handlePaymentPix = () => {
        setIsPixVisible(true); // mostra a aba de dados do pix
        setPixActive(true); // ativa a mudança de cor no botão do pix
        setIsCreditVisible(false);
        setCreditActive(false);
        setIsCartVisible(false);
    }

    // arrow function para mudar condições

    const handlePaymentCreditCard = () => {
        setIsCreditVisible(true); // mostra a aba de dados do credit card
        setCreditActive(true); // ativa a mudança de cor no botão do credit card
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

            {isDesktop ? <Header/> : <HeaderDesktop/>}

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

                    
                    {
                        isMobile ? 
                        <Button 
                        title="Avançar"
                        className="btn-payment"
                        />
                        :
                        <></>  
                    }
                    

                </C.Orders>

            {
                isMobile ?
                <></>
                :         

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

                                {
                                    isCartVisible&&
                                    <div className="cart">
                                        <span>Selecione uma forma de pagamento acima</span>
                                    </div>
                                }

                                {
                                    isPixVisible&&
                                    <div id='payment-Pix'>
                                        <img src={qrCode} alt="" />
                                    </div>
                                }

                                {
                                    isCreditVisible&&
                                    <div className='credit-card'>
                                        <div className="number-card">
                                            <span>Número do cartão</span>
                                            <Input 
                                            type="number"
                                            id="num"
                                            name="num"
                                            value={num}
                                            placeholder="0000 0000 0000 0000"
                                            onChange={handleNumChange}
                                            />
                                        </div>
                                        <div className="date-card">
                                            <div>
                                                <span>Validade</span>
                                                <Input
                                                type='number'
                                                id="date"
                                                name="date"
                                                placeholder="04/25"
                                                />
                                            </div>
                                            <div>
                                                <span>CVC</span>
                                                <Input 
                                                type="number"
                                                id="cvc"
                                                name="cvc"
                                                value={cvc}
                                                placeholder="000"
                                                onChange={handleCvcChange}
                                                />
                                            
                                            </div>
                                        </div>

                                        <Button
                                        title={loading ? "Finalizando pagamento" : "Finalizar pagamento"}
                                        disabled={loading}
                                        icon={PiReceiptBold}
                                        onClick={() => handleFinishPayment(cart)}
                                        />
                                    </div>

                                }

                                {
                                    isClockActive&&
                                    <div className="process-payment">
                                        <img src={clock} alt="" />
                                        <span>Processando o pagamento!</span>
                                    </div>
                                }

                                {
                                    isApprovedActive&&
                                    <div className="approved">
                                        <img src={approved} alt="" />
                                        <span>Pagamento aprovado!</span>
                                    </div>
                                }

                            </div>


                        </div>

                </C.Payment>
        }

            
                    
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}