import * as C from './style'

import {AiOutlineClose} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function Menu(){
    return(
        <C.Container>
            <C.Header>
                <button>
                    <AiOutlineClose size={24}/>
                </button>
                <h2>Menu</h2>

            </C.Header>
                <C.Content>

                <Input
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                    icon={BsSearch}
                />

                <div className="buttons">
                    <button>Novo Prato</button>
                    <button>Sair</button>
                </div>



                </C.Content>

            <Footer/>
        </C.Container>
    );
}