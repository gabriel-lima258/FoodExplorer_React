import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import * as C from './style';

import {AiOutlineLeft} from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { IngredientTag } from '../../components/IngredientTag';

import salada from '../../assets/Mask group.png';

export function DetailsFood(){
    const {user} = useAuth();

    const navigate = useNavigate();

    function handleBack(){
        navigate("/");
    }

    return(
        <C.Container>
            <Header/>
            <C.Content>

            <button className="btn-back" onClick={handleBack}>
                <AiOutlineLeft color="white" size={25}/>
                <strong>voltar</strong>
            </button>

            <div className="info">
                <img src={salada} alt="prato de salada" />
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
            </div>
            
            {
                user.isAdmin?
                <Button
                    type="button"
                    title="Editar prato"
                />
                :
                <div className='order'>
                    <button className='btn'><FiMinus size={25}/></button>
                    <span>0</span>
                    <button className='btn'><FiPlus size={25}/></button>
                    <Button title="pedir - pix 25.00"/>
                </div>
            }
            


            </C.Content>
            <Footer/>
        </C.Container>
    );
}