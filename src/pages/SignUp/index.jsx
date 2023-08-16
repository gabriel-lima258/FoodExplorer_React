import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as C from "./style";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import {MdOutlineEmail} from "react-icons/md"
import {HiLockClosed} from "react-icons/hi"
import {BiSolidUser} from "react-icons/bi"

import Polygon from '../../assets/Polygon.svg'

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // função para quando carregar uma página

    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
    }

    function handleSignUp() {
        if (!name || !email || !password) {
          return alert("Preencha todos os campos");
        }
    
        if (password.length < 6) {
          return alert("A senha deve conter no mínimo 6 caracteres!")
        }
    
        setLoading(true)
    
        api.post("/users", {name, email, password})
          .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
    
            setLoading(false)
          })
          .catch(error => {
            if(error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível cadastrar")
            }
    
            setLoading(false)
          })
      }
    return(
        <C.Container>
            <C.Logo>
                <img src={Polygon} alt="Poligono logo"/>
                <h1>food explorer</h1>
            </C.Logo>

            <C.Form>

            <h1>Crie sua conta</h1>
            
            <Section title="Nome">
                <Input
                label="Nome"
                type="text"
                placeholder="Gabriel Silva"
                onChange={e => setName(e.target.value)}
                icon={BiSolidUser}
                />
            </Section>

            <Section title="Email">
                <Input
                label="Email"
                type="text"
                placeholder="examplo@email.com.br"
                onChange={e => setEmail(e.target.value)}
                icon={MdOutlineEmail}
                />
            </Section>

            <Section title="Senha">
                <Input
                label="Senha"
                type="password"
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)}
                icon={HiLockClosed}
                />
            </Section>

            <Button
                title={loading ? "Cadastrando" : "Criar conta"}
                onClick={handleSignUp}
                disabled={loading}
            />

            <ButtonText
                title="Já tenho uma conta"
                onClick={handleBack}
            />

            </C.Form>
        </C.Container>
    );
}