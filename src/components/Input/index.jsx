import { Container } from './style';

export function Input({icon: Icon, classname, label, ...rest}){
    return(
        <Container>
            <label htmlFor={classname}>{label}</label>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </Container>
    )
}