import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { api } from '../../services/api';

import * as C from './style';

import { Header } from '../../components/Header';
import { HeaderDesktop } from '../../components/HeaderDesktop';
import { SectionCard } from '../../components/SectionCard';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import Slogan from '../../assets/Slogan_biscoito.svg';


export function Home(){
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    const isMobile = useMediaQuery({ maxWidth: 1023})
    

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods?title=${search}`)
            setFoods(response.data)
        }

        fetchFood();
    }, [search]) 

    return(
        <C.Container>
            
            {isMobile ? <Header/> : <HeaderDesktop search={setSearch}/>}

            <C.Content>
                <C.Slogan>
                    <img src={Slogan} alt="slogan biscoito" />
                    <div className="slogan">
                        <div className='title'>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </div>
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