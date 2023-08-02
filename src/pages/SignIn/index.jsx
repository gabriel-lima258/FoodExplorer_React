import { Container, Form } from "./style";

import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";
import { ButtonText } from "../../components/ButtonText";
 

export function SignIn(){
    return(
        <Container>
            <Brand/>

            <Form>
            
            <Button type="button">Entrar</Button>

            <ButtonText title="Criar uma conta"/>

            </Form>
        </Container>
    );
}