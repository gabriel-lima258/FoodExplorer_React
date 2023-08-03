import * as C from "./style";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import Polygon from '../../assets/Polygon.svg'
 

export function SignIn(){
    return(
        <C.Container>
            <C.Logo>
                <div className="Logo">
                    <img src={Polygon} alt="Poligono logo"/>
                    <h1>food explorer</h1>
                </div>
            </C.Logo>
        
            <C.Form>
            
            <Section title="Email">
                <Input
                label="Email"
                type="text"
                placeholder="Exemplo: examplo@email.com.br"
                />
            </Section>
            
            <Section title="Senha">
                <Input
                label="Senha"
                type="password"
                placeholder="No mínimo 6 caracteres"
                />
            </Section>

            <Button type="button">Entrar</Button>

            <ButtonText title="Criar uma conta"/>

            </C.Form>
        </C.Container>
    );
}