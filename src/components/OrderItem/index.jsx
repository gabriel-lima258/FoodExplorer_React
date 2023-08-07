import * as C from './style'

import image from '../../assets/Mask group-2.png'

export function OrderItem({data}){
    return(
        <C.Container>
            <div>
                <img src={image} alt="iamge" />
            </div>
            <C.Content>
                <div className='description'>
                    <span>2 X Salada Grega</span>
                    <strong>R$ 10.00</strong>
                </div>
                <button>
                    Excluir pedido
                </button>
            </C.Content>
        </C.Container>
    )
}