import { Container, Form } from "./style";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn(){
    return(
        <Container>
            <Form>

            <Input
            type="text"
            placeholder="Enter"
            label="Senha"          
            />

            <Button type="button">Entrar</Button>

            </Form>
        </Container>
    );
}