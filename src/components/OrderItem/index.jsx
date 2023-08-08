import * as C from './style'

import { ButtonText } from '../ButtonText'

import image from '../../assets/Mask group-2.png'

export function OrderItem({data, favorite = false}){
    return(
        <C.Container
        $favorite={favorite}
        >
            <div>
                <img src={image} alt="iamge" />
            </div>
            <C.Content>
                <div className='description'>
                    <span>2 X Salada Grega</span>
                    <strong>R$ 10.00</strong>
                </div>

                <ButtonText
                    title="Excluir pedido"
                />
            </C.Content>
        </C.Container>
    )
}