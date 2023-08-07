import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

import * as C from './style'

import {AiOutlineClose} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function Menu(){

    const {user, signOut} = useAuth()
    const navigate = useNavigate();

    function handleHome(){
        navigate("/");
    }

    function handleSignOut(){
        signOut();
        handleHome();
    }

    function handleNewFood(){
        navigate("/new");
    }

    return(
        <C.Container>
            <C.Header>
                <button onClick={handleHome}>
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
                    {
                        user.isAdmin ?
                        <button onClick={handleNewFood}>
                            Novo Prato
                        </button>
                        :
                        <button onClick={handleNewFood}>
                            Meus favoritos
                        </button>
                    }
                    <button onClick={handleSignOut}>Sair</button>
                </div>



                </C.Content>

            <Footer/>
        </C.Container>
    );
}