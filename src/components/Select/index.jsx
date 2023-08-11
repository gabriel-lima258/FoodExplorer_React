import { Container } from './style';

export function Select({icon: Icon, value, ...rest}){
    return(
        <Container>
            <select value={value} {...rest}>
                <option value="default" disabled>Selecione a categoria</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
            </select>
                {Icon && <Icon size={20}/>}
        </Container>
    )
}