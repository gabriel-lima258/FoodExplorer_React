import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import * as C from './style'

import {AiOutlineClose} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer'

export function Menu(){
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

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

    function handleFavorites(){
        navigate("/favorite");
    }

    function handleOrders(){
        navigate("/order");
    }

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods?title=${search}`)
            setFoods(response.data)
        }

        fetchFood()
    }, [search]) 


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
                    onChange={e => (setSearch(e.target.value))}
                />

                <div className="buttons">
                    {
                        user.isAdmin ?
                        <>
                            <button onClick={handleNewFood}>
                            Novo Prato
                            </button>
                            <button onClick={handleOrders}>
                            Histórico de pedidos
                            </button>
                        
                        </>
                        :
                        <>
                            <button onClick={handleFavorites}>
                                Meus favoritos
                            </button>
                            
                            <button onClick={handleOrders}>
                                Acompanhar pedido
                            </button>
                        </>
                    }
                    <button onClick={handleSignOut}>Sair</button>

                </div>

                </C.Content>

            <Footer/>
        </C.Container>
    );
}