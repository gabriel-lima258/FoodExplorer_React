import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext({})

function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites`)) || [])

    function addDishToFavorites(data) {
        setFavorites(...favorites, data);
    }

    function removeDishFromFavorites(data) {
        setFavorites(favorites.filter((dish) => dish.id === data.id))
    }

    useEffect(() =>{
        localStorage.setItem(`@foodexplorer:favorites`, JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addDishToFavorites,
            removeDishFromFavorites,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

function useFavorites() {
    const context = useContext(FavoritesContext)
    return context;
}

export { FavoritesProvider, useFavorites };