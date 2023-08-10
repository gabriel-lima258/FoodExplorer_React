import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import * as C from './style';

import {AiOutlineLeft} from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { IngredientTag } from '../../components/IngredientTag';
import { HeaderDesktop } from "../../components/HeaderDesktop";

import salada from '../../assets/Mask group.png';

export function DetailsFood(){
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);

    const {user} = useAuth();

    const navigate = useNavigate();
    const params = useParams();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    function handleBack(){
        navigate("/");
    }

    function handleEditFood(id){
        navigate(`/edit/${id}`);
    }

    useEffect(() => {
        async function fetchFood(){
            const response = await api.get(`/foods/${params.id}`);
            setData(response.data);
        }

        fetchFood();
    }, []);

    useEffect(() => {
        async function fetchImage(){
            if(data) {
                setImage(`${api.defaults.baseURL}/files/${data.avatarFood}`)
            } else {
                setImage(salada)
            }
        }

        fetchImage();
    }, [data]);


    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

        {
                data &&

            <C.Content>

            <button className="btn-back" onClick={handleBack}>
                <AiOutlineLeft color="white" size={25}/>
                <strong>voltar</strong>
            </button>

            <img src={image} alt={data.title} />

            <div className="info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>

                <div className="tags">

                    {
                        data.ingredients.map(ingredients => (
                            
                            <IngredientTag 
                            key={String(ingredients.id)}  
                            title={ingredients.name}
                            />
                        ))
                    }


                </div>

                {
                user.isAdmin?
                <Button
                    className= "btn-edit"
                    type="button"
                    title="Editar prato"
                    onClick={handleEditFood}
                />
                :
                <div className='order'>
                    <button className='btn'><FiMinus size={25}/></button>
                    <span>0</span>
                    <button className='btn'><FiPlus size={25}/></button>
                    <Button title="pedir - pix 25.00"/>
                </div>
                }
     
            </div>
            
            </C.Content>
        }
            <Footer/>
        </C.Container>
    );
}