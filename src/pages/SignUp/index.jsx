import { Container, Form } from "./style";

import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
 

export function SignUp(){
    return(
        <Container>
            <Brand/>

            <Form>
            
            <Input
            label="Nome"
            type="text"
            placeholder="Gabriel Silva"
            />
            <Input
            label="Email"
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            />
            <Input
            label="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            />

            <Button type="button">Criar conta</Button>

            <ButtonText title="Já tenho uma conta"/>

            </Form>
        </Container>
    );
}