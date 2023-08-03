import {Container} from './style'

export function IngredientTag({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    );
}   