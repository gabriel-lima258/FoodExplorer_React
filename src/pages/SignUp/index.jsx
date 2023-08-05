import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as C from "./style";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import Polygon from '../../assets/Polygon.svg'

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleSignUp(){

        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        if(password.length < 6){
            return alert("A senha precisa ter no mínimo 6 caracteres!");
        }
        
        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){ //dá um alerta na mensagem dessa resposta desse erro, trazendo para o frontend a mensagem de AppError do backend
                alert(error.response.data.message);
            } else { //se não houver nenhuma mensagem específica
                alert("Não foi possível efetuar o cadastro!");
            }
        });
    }

    return(
        <C.Container>
            <C.Logo>
                <div className="Logo">
                    <img src={Polygon} alt="Poligono logo"/>
                    <h1>food explorer</h1>
                </div>
            </C.Logo>

            <C.Form>
            
            <Section title="Nome">
                <Input
                label="Nome"
                type="text"
                placeholder="Gabriel Silva"
                onChange={e => setName(e.target.value)}
                />
            </Section>

            <Section title="Email">
                <Input
                label="Email"
                type="text"
                placeholder="Exemplo: examplo@email.com.br"
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
                title="Criar conta"
                onClick={handleSignUp}
            />

            <ButtonText 
                title="Já tenho uma conta"
                onClick={handleBack}
            />

            </C.Form>
        </C.Container>
    );
}