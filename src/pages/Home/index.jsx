import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './style';

import { Header } from '../../components/Header';
import { SectionCard } from '../../components/SectionCard';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import Slogan from '../../assets/Slogan_biscoito.svg';


export function Home(){
    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    
  

    return(
        <C.Container>
            <Header/>
            <C.Content>
                <C.Slogan>
                    <img src={Slogan} alt="slogan biscoito" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </C.Slogan>

                <SectionCard title="Refeições" whiteColor>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                
               

                </SectionCard>

                <SectionCard title="Pratos principais" whiteColor>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>

                </SectionCard>

                <SectionCard title="Bebidas" whiteColor>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>

                </SectionCard>


            </C.Content>
           <Footer/>

        </C.Container>
    );
}