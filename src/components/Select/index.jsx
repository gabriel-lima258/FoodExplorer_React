import { Container } from './style';

export function Select({icon: Icon, ...rest}){
    return(
        <Container>
            <select {...rest}>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
            </select>
                {Icon && <Icon size={20}/>}
        </Container>
    )
}