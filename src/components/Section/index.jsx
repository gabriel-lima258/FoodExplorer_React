import { Container } from "./style";

export function Section({title, children, icon: Icon, ...rest}){
    return (
        <Container {...rest}>
            <h2>{title} {Icon && <Icon size={16} color='white'/>}</h2>   
            {children}
        </Container>
    );
}