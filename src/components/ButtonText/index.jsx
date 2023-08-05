import { Container } from './style';

export function ButtonText({title, isActive = false, icon: Icon, ...rest}){
    return(
        <Container
            $isactive={isActive}
            {...rest}
        >
            {Icon && <Icon/>}
            {title}
        </Container>
    );
}