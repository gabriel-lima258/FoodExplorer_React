import {createContext, useContext, useState, useEffect} from 'react';
import { api } from '../services/api';

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem(`foodexplorer:cart` || [])))
    const [payment, setPayment] = useState( JSON.parse(localStorage.getItem(`paymentAccept` || false)))
    const [orders, setorders] = useState([])

    function handleAddCart()
}