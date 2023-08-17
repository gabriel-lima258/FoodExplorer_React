import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useFavorites } from '../../hooks/favorites';
import { useCart } from '../../hooks/cart';
import { api } from '../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { PiPencilLineLight } from 'react-icons/pi'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


export function Card({data, ...rest}){
  
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    const { user } = useAuth();

    const navigate = useNavigate();

    //====carrega e guarda cart====//
    const { handleAddDishToCart } = useCart();
    
    //====carrega e guarda favorites====//
    const { favorites, addDishToFavorite, removeDishFromFavorite } = useFavorites()
    const isFavorite = favorites.some((dish) => dish.title === data.title);
    
    //====carrega a imagem do prato====//
    const imageURL = `${api.defaults.baseURL}/files/${data.avatarFood}` 
    
    const [quantity, setQuantity] = useState(1);

    function handleAddQuantity(){
        return setQuantity(prevState => ++prevState);
    }

    function handleRemoveQuantity(){
        return setQuantity(prevState => --prevState);
    }

    function handleDetails(){
        navigate(`/details/${data.id}`)
    }

    return(
        <Container {...rest}>  
            <button className='btn-icon'>
                {
                    user.isAdmin
                    ?
                    <Link to={`edit/${data.id}`}>
                        <PiPencilLineLight color='white' size={30}/>
                    </Link>
                    :
                    <>
                        <button 
                        onClick={() => isFavorite ? removeDishFromFavorite(data) : addDishToFavorite(data)}
                        className='btn-favorites'
                        >
                            {
                                isFavorite ?
                                <AiFillHeart size={30} color='red'/>
                                :
                                <AiOutlineHeart size={30}/>
                            }
                        </button>
                        
                   
                    </>            
                }
            </button>
           
            <div className='img'>
                <img src={imageURL} alt={data.title} onClick={handleDetails}/>
            </div>

            <Link type='button' to={`details/${data.id}`} className='title'>
                <h3>{data.title} > </h3>
                
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

                    <span>{quantity.toString().padStart(2, '0')}</span>

                    <button 
                    className='btn' 
                    onClick={handleAddQuantity}>
                        <FiPlus size={25}/>
                    </button>

                    <Button 
                    title="Incluir"
                    onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                    />
                </div>
            }
        </Container>
    );
}