import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight, FaTrashAlt} from 'react-icons/fa'

import image from '../../assets/Mask group-1.png'

export function Card({data, ...rest}){
    return(
        <Container>
            <Button>
                <FaTrashAlt size={25}/>
            </Button>

            <div>
                <img src={image} alt="teste" />
            </div>

            <a>
                <h3>salada <FaAngleRight/></h3>
            </a>

            <p>alfaces</p>
            <strong>R$ 10.21</strong>


        </Container>
    );
}