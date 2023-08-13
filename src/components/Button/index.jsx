/* eslint-disable react/prop-types */
import { Container } from './style';

export function Button({title, exclude = false, add = false, loading = false, icon: Icon, ...rest}) {
    return(
        <Container
        disabled={loading}
        $exclude={exclude}
        $add={add}
        {...rest}
        >
          {Icon && <Icon size={20}/>}
          {loading ? 'Carregando' : title}
        </Container>
    )
}