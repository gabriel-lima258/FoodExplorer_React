import * as C from './style'

import { ButtonText } from '../ButtonText'

import { useFavorites } from '../../hooks/favorites';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function FavoriteItem({data}){

    const { favorites, removeDishFromFavorite } = useFavorites();

    const navigate = useNavigate();

    function handleItem(){
        navigate(`/details/${data.id}`);
    }

    const imageURL = data && `${api.defaults.baseURL}/files/${data.avatarFood}`;

    return(
        <C.Container>
            <div>
                <img src={imageURL} alt={data.title} onClick={handleItem}/>
            </div>
            <C.Content>
                <div className='favorite-item'>
                    <p>{data.title}</p>

                <ButtonText
                    title="Remover dos Favoritos"
                    onClick={() => removeDishFromFavorite(data)}
                    />
                    </div>
            </C.Content>
        </C.Container>
    )
}