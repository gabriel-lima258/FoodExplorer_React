import {createContext, useContext, useState, useEffect} from 'react';
import { api } from '../services/api';

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []) // criando um localStorage inicializador
    const [orders, setOrders] = useState([])

    function handleAddDishToCart(data, quantity, image){

    try {
        const {id, title, price} = data;
        const priceFormatted = quantity * Number(price);

        const order = {id, title, price: priceFormatted, image, quantity};

        const orderExists = cart.some((userOrder) => userOrder.title === order.title)

        if (orderExists){
            return alert("Este item ja está no carrinho!");
        }

        setCart(prevState => [...prevState, order])
        
        alert("Item adicionado ao carrinho!")
    } catch (error) {
        if(error.response){
            alert(error.response.message)
        } else {
            alert("Não foi possível adicionar o item no carrinho")
            console.log(error)
        }
    }

    }

    function handleRemoveDishFromCart(deleted) {
        setCart(prevState => prevState.filter(item => item.id !== deleted))
    }

    const total = cart.reduce((value, item) => {
        return value + item.price
    }, 0)

    async function handleResetCart(id, navigate) {
        localStorage.removeItem(`@foodexplorer:cart`);

        setCart([]);

        await api.delete(`/orders/${id}`);
        navigate("/");
    }

    useEffect(() => {
        localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart));
    }, [cart])

    return(
        <CartContext.Provider value={{
            cart,
            handleAddDishToCart,
            handleRemoveDishFromCart,
            total: String(total.toFixed(2)).replace('.', ','),
            orders,
            setOrders,
            handleResetCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(){
    const context = useContext(CartContext)
    return context;
}

export { CartProvider, useCart };