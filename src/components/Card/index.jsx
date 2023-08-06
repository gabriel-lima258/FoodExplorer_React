import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa'
import { PiPencilLineLight } from 'react-icons/pi'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


import image from '../../assets/Mask group-10.png'


export function Card({data, ...rest}){
    const { user } = useAuth();

    const navigate = useNavigate();

    function handleBack(){
        navigate("/details/1");
    }


    return(
        <Container>
          
           
            <button>
                {
                    user.isAdmin ?
                    <PiPencilLineLight color='white' size={30}/>
                    :
                    <AiOutlineHeart color='white' size={30}/>
                }
            </button>
           
            <div>
                <img src={image} alt="teste" />
            </div>

            <a type='button' onClick={handleBack}>
                <h3>salada <FaAngleRight/></h3>
            </a>

            <strong>R$ 10.21</strong>

            {
                user.isAdmin ?
                <></>  
        
                :
                <div className='quantity'>
                    <button className='btn'><FiMinus size={25}/></button>
                    <span>0</span>
                    <button className='btn'><FiPlus size={25}/></button>
                </div>
            }

            {
                user.isAdmin ?
                <></>
                :
                <Button title="incluir"/>
            }


        </Container>
    );
}