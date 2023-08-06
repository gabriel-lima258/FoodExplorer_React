import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container } from './style';
import { Button } from '../Button';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight, FaTrashAlt} from 'react-icons/fa'

import image from '../../assets/Mask group-1.png'
import pencil from '../../assets/Pencil.svg'

export function Card({data, ...rest}){
    const { user } = useAuth();

    const navigate = useNavigate();




    return(
        <Container>
          
           
            <button>
                <img src={pencil} alt="edit icon"/>
            </button>
           
            <div>
                <img src={image} alt="teste" />
            </div>

            <a type='button'>
                <h3>salada <FaAngleRight/></h3>
            </a>

            <strong>R$ 10.21</strong>


        </Container>
    );
}