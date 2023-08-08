import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

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
    const {user} = useAuth();

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    function handleBack(){
        navigate("/");
    }

    function handleEditFood(){
        navigate("/edit/1");
    }


    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

            <C.Content>

            <button className="btn-back" onClick={handleBack}>
                <AiOutlineLeft color="white" size={25}/>
                <strong>voltar</strong>
            </button>

            <div className="page">
                
            </div>

            <img src={salada} alt="prato de salada" />

            <div className="info">
                <h1>Salada Ravanello</h1>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                <div className="tags">

                <IngredientTag title="alface"/>
                <IngredientTag title="alface"/>
                <IngredientTag title="alface"/>
                <IngredientTag title="alface"/>
                <IngredientTag title="alface"/>
                <IngredientTag title="alface"/>

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
            <Footer/>
        </C.Container>
    );
}