/* eslint-disable react/prop-types */
import { Container } from './style';
import polygon from '../../assets/Polygon 1.svg'

export function Brand({adm = false}){
    return(
        <Container $adm={adm}>
            <img src={polygon} alt="imagem logo"/>
            <h1>food explorer</h1>
            {adm ? <span>admin</span> : null}
        </Container>
    );
}