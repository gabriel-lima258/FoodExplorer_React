import * as C from './style';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

import Slogan from '../../assets/Slogan_biscoito.svg';


export function Home(){
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

                <Section title="Ingredientes">


                </Section>

            </C.Content>
           <Footer/>

        </C.Container>
    );
}