import { Container } from './style';

export function Input({icon: Icon, classname, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </Container>
    )
}