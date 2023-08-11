import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useFavorites } from '../../hooks/favorites';
import { useCart } from '../../hooks/cart';
import { api } from '../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa'
import { PiPencilLineLight } from 'react-icons/pi'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import imagePlaceholder from '../../assets/Mask group-10.png'

export function Card({data, ...rest}){

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const [quantity, setQuantity] = useState(1);

    const { user } = useAuth();

    //====carrega a imagem do prato====//
    const imageURL = `${api.defaults.baseURL}/files/${data.avatarFood}` 

    //====carrega e guarda favorites====//
    const { favorites, addDishToFavorite, removeDishFromFavorite } = useFavorites()
    

    //====carrega e guarda cart====//
    const { handleAddDishToCart, paymentAccept } = useCart();

    function handleAddQuantity(){
        return setQuantity(prevState => ++prevState);
    
    }
    function handleRemoveQuantity(){
        return setQuantity(prevState => --prevState);
    }

    return(
        <Container {...rest}>  
            <button>
                {
                    user.isAdmin ?
                    <Link to={`edit/${data.id}`}>
                        <PiPencilLineLight color='white' size={30}/>
                    </Link>
                    :
                    <AiOutlineHeart color='white' size={30}/>
                }
            </button>
           
            <div className='img'>
                <img src={imageURL} alt={data.title} />
            </div>

            <Link type='button' to={`details/${data.id}`} className='title'>
                <h3>{data.title} <FaAngleRight/></h3>
            </Link>

            {
                isMobile ? 
                <></>
                :
                <p>{data.description}</p>
            }

            <strong>R$ {(data.price * quantity).toFixed(2)}</strong>

            {
                user.isAdmin ?
                <></>  
                :
                <div className='quantity'>
                    <button 
                    className='btn' 
                    onClick={handleRemoveQuantity}
                    disabled={quantity <= 1}
                    >
                        <FiMinus size={25}/>
                    </button>

                    <span>{quantity < 10 ? `0${quantity}` : quantity}</span>

                    <button 
                    className='btn' 
                    onClick={handleAddQuantity}>
                        <FiPlus size={25}/>
                    </button>

                    <Button title="Incluir"/>
                </div>
            }
        </Container>
    );
}