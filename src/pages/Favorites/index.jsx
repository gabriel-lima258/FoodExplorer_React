import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useFavorites } from "../../hooks/favorites";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { api } from "../../services/api";

import * as C from './style'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { FavoriteItem } from "../../components/FavoriteItem";

export function Favorite(){


    const {user} = useAuth();

    const { favorites, removeDishFromFavorite } = useFavorites()

    const params = useParams();

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})



    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

                <C.Content>
                    <C.Orders>
                        <h3>Meus favoritos</h3>

                        <div className="section-orders">
                            {
                                favorites&&
                                favorites.map(item => (
                                    <FavoriteItem
                                        key={String(item.id)}
                                        data={item}
                                    />
                                ))
                            }
                        </div>

                    </C.Orders>
                    

                </C.Content>

            <Footer/>
        </C.Container>
    );
}