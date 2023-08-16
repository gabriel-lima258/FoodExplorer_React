import * as C from './style'

import { ButtonText } from '../ButtonText'

import { useCart } from '../../hooks/cart'

export function OrderItem({data}){

    const { handleRemoveDishFromCart, paymentAccepct } = useCart();

    return(
        <C.Container>
            <div>
                <img src={data.image} alt={data.title} />
            </div>
            <C.Content>
                <div className='description'>
                    <span>{data.quantity} x {data.title}</span>
                    <strong>R$ {data.price}</strong>
                </div>

                <ButtonText
                    title="Excluir pedido"
                    onClick={() => handleRemoveDishFromCart(data.id)}
                    disabled={paymentAccepct}
                />
            </C.Content>
        </C.Container>
    )
}