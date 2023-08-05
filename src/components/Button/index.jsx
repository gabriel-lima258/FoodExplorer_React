/* eslint-disable react/prop-types */
import { Container } from './style';

export function Button({title, exclude = false, add = false, loading = false, ...rest}) {
    return(
        <Container
        disabled={loading}
        $exclude={exclude}
        $add={add}
        {...rest}
        >
          {loading ? 'Carregando' : title}
        </Container>
    )
}