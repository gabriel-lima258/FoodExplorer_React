import * as C from './style';
import {AiOutlineLeft} from 'react-icons/ai'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { IngredientTag } from '../../components/IngredientTag';

import salada from '../../assets/Mask group.png';

export function DetailsFood(){
    return(
        <C.Container>
            <Header/>
            <C.Content>

            <div className="button">
                <ButtonText title="voltar" icon={AiOutlineLeft}/>
            </div>

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
            
            <Button type="button">Editar prato</Button>


            </C.Content>
            <Footer/>
        </C.Container>
    );
}