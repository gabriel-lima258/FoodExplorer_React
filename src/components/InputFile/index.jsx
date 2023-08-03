import { Container } from './style';

export function InputFile({icon: Icon, classname, label, ...rest}){
    return(
        <Container>
            <label htmlFor={classname}>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
            {label}
            </label>
        </Container>
    )
}