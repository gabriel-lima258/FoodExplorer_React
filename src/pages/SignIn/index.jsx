import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import * as C from "./style";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import Polygon from '../../assets/Polygon.svg'
 

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn, loading} = useAuth()

    const navigate = useNavigate();

    function handleSignIn(){
        signIn({email, password});
    }

    function handleRegister() {
        navigate("/register");
    }

    return(
        <C.Container>
            <C.Logo>
                <img src={Polygon} alt="Poligono logo"/>
                <h1>food explorer</h1>
            </C.Logo>
        
            <C.Form>

            <h1>Faça login</h1>
            
            <Section title="Email">
                <Input
                label="Email"
                type="text"
                placeholder="examplo@email.com.br"
                onChange={e => setEmail(e.target.value)}
                />
            </Section>
            
            <Section title="Senha">
                <Input
                label="Senha"
                type="password"
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}
                />
            </Section>

            <Button
                title={loading ? "Entrando" : "Entrar"}
                onClick={handleSignIn}
                disabled={loading}
            />

            <ButtonText
                title="Criar uma conta"
                onClick={handleRegister}
            />

            </C.Form>
        </C.Container>
    );
}