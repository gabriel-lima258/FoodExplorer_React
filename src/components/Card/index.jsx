import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useMediaQuery } from 'react-responsive';

import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa'
import { PiPencilLineLight } from 'react-icons/pi'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import test from '../../assets/Mask group-10.png'

export function Card({data, title, description, price, image, onClick, id, ...rest}){
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const [quantity, setQuantity] = useState(1);
    const [imageFood, setImageFood] = useState(null);

    const { user } = useAuth();

    const navigate = useNavigate();


    function handleEditFood(){
        navigate(`/edit/${id}`);
    }

    function handleAddQuantity(){
        return setQuantity(prevState => ++prevState);
    
    }
    function handleRemoveQuantity(){
        return setQuantity(prevState => --prevState);
    }

    useEffect(() => {
        async function fetchImageFood(){
            if(image) {
                setImageFood(`${api.defaults.baseURL}/files/${image}`)
            } else {
                setImageFood(test)
            }
        }

        fetchImageFood();
    }, [image])

    return(
        <Container {...rest}>  
            <button>
                {
                    user.isAdmin ?
                    <PiPencilLineLight color='white' size={30} onClick={handleEditFood}/>
                    :
                    <AiOutlineHeart color='white' size={30}/>
                }
            </button>
           
            <div className='img'>
                <img src={imageFood} alt={title} />
            </div>

            <a type='button' onClick={onClick} className='title'>
                <h3>{title} <FaAngleRight/></h3>
            </a>

            {
                isMobile ? 
                <></>
                :
                <p>{description}</p>
            }

            <strong>R$ {(price * quantity).toFixed(2)}</strong>

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