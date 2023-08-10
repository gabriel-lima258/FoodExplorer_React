import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import * as C from './style';

import { Header } from '../../components/Header';
import { HeaderDesktop } from '../../components/HeaderDesktop';
import { SectionCard } from '../../components/SectionCard';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import Slogan from '../../assets/Slogan_biscoito.svg';
import { api } from '../../services/api';


export function Home(){
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    const isMobile = useMediaQuery({ maxWidth: 1023})
    const navigate = useNavigate();

    function handleDetailsFood(id){
        navigate(`/details/${id}`);
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
            
            {isMobile ? <Header/> : <HeaderDesktop onChange={e => setSearch(e.target.value)}/>}

            <C.Content>
                <C.Slogan>
                    <img src={Slogan} alt="slogan biscoito" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </C.Slogan>

            {
                foods.filter(food => food.category == "Refeições").length > 0 &&

                <SectionCard title="Refeições" whiteColor>
                    {
                        foods.filter(food => food.category == "Refeições").map(food => (
                            <Card
                            key={String(food.id)}
                            data={food}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                            image={food.avatarFood}
                            onClick={() => handleDetailsFood(food.id)}
                            />
                        ))
                    }
                </SectionCard>
            }

            {
                foods.filter(food => food.category == "Sobremesas").length > 0 &&

                <SectionCard title="Sobremesas" whiteColor>
                    {
                        foods.filter(food => food.category == "Sobremesas").map(food => (
                            <Card
                            key={String(food.id)}
                            data={food}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                            image={food.avatarFood}
                            onClick={() => handleDetailsFood(food.id)}
                            />
                        ))
                    }
                </SectionCard>
            }

            {
                foods.filter(food => food.category == "Bebidas").length > 0 &&

                <SectionCard title="Bebidas" whiteColor>
                    {
                        foods.filter(food => food.category == "Bebidas").map(food => (
                            <Card
                            key={String(food.id)}
                            data={food}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                            image={food.avatarFood}
                            onClick={() => handleDetailsFood(food.id)}
                            />
                        ))
                    }
                </SectionCard>
            }

            </C.Content>
            
            <Footer/>         

        </C.Container>
    );
}