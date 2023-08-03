import { Container } from './style';

export function Select({icon: Icon, classname, option, ...rest}){
    return(
        <Container>
            <select {...rest}>
                <option>{option}</option>
            </select>
                {Icon && <Icon size={20}/>}
        </Container>
    )
}