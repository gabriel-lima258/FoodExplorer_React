import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from "react";
import { api } from "../../services/api";

import * as C from './style'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";

export function Orders(){

    const { user } = useAuth()
    const { orders, setOrders } = useCart()

    const isMobile = useMediaQuery({ maxWidth: 768})
    const isDesktop = useMediaQuery({ maxWidth: 1023})

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get("/orders")
            setOrders(response.data)
        }

        fetchOrders();
    }, [])

   async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value;

    const cart = {
        id: order.id,
        orderStatus: statusSelected,
    };

    await api.put("/orders", cart);
    location.reload();
   }

   function formatDate(date) {
    const dateFormatted = new Date(date);

    let monthFormatted = (dateFormatted.getMonth() + 1).toString();
    monthFormatted = monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted;

    let minutesFormatted = dateFormatted.getMinutes().toString();
    minutesFormatted = minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted;

    return `${dateFormatted.getDate()}/${monthFormatted} às ${
        dateFormatted.getHours() - 3 }h${minutesFormatted}`;
    }
   

    return(
        <C.Container>

            {isDesktop ? <Header/> : <HeaderDesktop/>}

                <C.Content>

                {
                    isMobile ? 

                    <C.TableMobile>

                    <h1>Pedidos</h1>

                        {
                            orders.length < 1 &&
                            <div className='noneOrders'>
                                <p>Não existem pedidos para serem produzidos!</p>
                            </div>
                        }

                        {
                            user.isAdmin ?
                            <>
                                {
                                    orders&&
                                    orders.map(order => (
                                        <div key={String(order.id)} className="ordersMobile">
                                            <div className="col-3">
                                            <span>0000{order.id}</span>
                                            <select defaultValue={order.orderStatus} onChange={event => handleOrderStatus(order, event)}>
                                                    <option value="🟡 Pendente">🟡 Pendente</option>
                                                    <option value="🟠 Preparando">🟠 Preparando</option>
                                                    <option value="🟢 Entregue">🟢 Entregue</option>
                                                    <option value="🔴 Cancelado">🔴 Cancelado</option>
                                            </select>
                                            <span>{formatDate(order.created_at)}</span>
                                            </div>

                                            {
                                                order.items.map((item) => (
                                                    <span key={item.title}>{item.quantity} x {item.title} , {" "}</span>
                                                ))
                                            }

                                        </div>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    orders&&
                                    orders.map(order => (
                                        <div key={String(order.id)} className="ordersMobile">
                                            <div className="col-3">
                                            <span>0000{order.id}</span>
                                            <span>{order.orderStatus}</span>
                                            <span>{formatDate(order.created_at)}</span>
                                            </div>

                                            {
                                                order.items.map((item) => (
                                                    <span key={item.title}>{item.quantity} x {item.title} , {" "}</span>
                                                ))
                                            }

                                        </div>
                                    ))
                                }
                            </>
                        }



                    </C.TableMobile>

                    :

                    <C.Table>

                    <h1>Histórico de pedidos</h1>

                        <table>
                            <thead>
                                <th>Status</th>
                                <th>Código</th>
                                <th>Detalhamento</th>
                                <th>Data e hora</th>
                            </thead>

                        {
                            orders.length < 1 &&

                            <tbody>
                                <tr>
                                    <td colSpan="4">
                                        <div className='noneOrders'>
                                            <p>Não existem pedidos para serem produzidos!</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        }

                        {
                            user.isAdmin ?

                            <tbody>
                                {
                                    orders&&
                                        orders.map(order => (
                                            <tr key={String(order.id)}>
                                                <td>
                                                <select defaultValue={order.orderStatus} onChange={event => handleOrderStatus(order, event)}>
                                                    <option value="🟡 Pendente">🟡 Pendente</option>
                                                    <option value="🟠 Preparando">🟠 Preparando</option>
                                                    <option value="🟢 Entregue">🟢 Entregue</option>
                                                    <option value="🔴 Cancelado">🔴 Cancelado</option>
                                                </select>
                                                </td>
                                                <td>0000{order.id}</td>
                                                <td>
                                                    {
                                                        order.items.map((item) => (
                                                            <span key={item.title}>{item.quantity} x {item.title} , {" "}</span>
                                                        ))
                                                    }
                                                </td>
                                                <td>{formatDate(order.created_at)}</td>
                                            </tr>
                                        ))
                                }


                            </tbody>

                            :
                            
                            <tbody>
                                {
                                    orders &&
                                        orders.map(order => (
                                            <tr key={String(order.id)}>
                                                <td>{order.orderStatus}</td>
                                                <td>0000{order.id}</td>
                                                <td>
                                                {
                                                    order.items.map((item) => (
                                                        <span key={item.title}>{item.quantity} x {item.title} , {" "}</span>
                                                    ))
                                                }
                                                </td>
                                                <td>{formatDate(order.created_at)}</td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        }

                        </table>
                    </C.Table>
                }
                    
                    
                </C.Content>

            <Footer/>
        </C.Container>
    );
}