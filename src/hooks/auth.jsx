/* eslint-disable react/prop-types */
import {createContext, useContext, useState, useEffect} from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    function signOut(){
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");

        setData({}); //zerando os dados
    }

    async function signIn({email, password}){

        try { //enviando os dados para o BD e guardando sua resposta nesta constante

            setLoading(true);
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data();

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user)); // definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor, e já transformando com o stringify o user de objeto para texto para poder ser lido e guardado no LocalStorage do navegador
            localStorage.setItem("@foodexplorer:token", token); // definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor. Como o token já é texto  não preciso fazer nenhum parse.

            api.defaults.headers.common['Authorization'] = 'Bearer ${token}'; //inserindo um token do tipo Bearer, de autorização, no cabeçalho, por padrão de todas as requisições que o usuário fizer a partir de agora.
            
            setData({user, token}); //configurando, atualizando, alterando meu estado data para os valores de user e token acima desestruturados

            setLoading(false);

        } catch(error) {

            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível realizar o login!");
            }
            setLoading(false);
        }
    }

    //Lógica para o estado pegar os dados do user que ficaram no LocalStorage, mesmo havendo reload na page (pois no reload os estados somem, se este data sumir eu sou redirecionado para auth routes, não quero isso)

    useEffect(() => { //buscando as informações do local storage no navegador para permanecer após dar reload
        const user = localStorage.getItem("@foodexplorer:user");
        const token = localStorage.getItem("@foodexplorer:token");

        if(user && token){ //fazendo um if para garantir que tanto o token como o user foram informados
            api.defaults.headers.co['Authorization'] = `Bearer ${token}`;

            setData({ //colocando dentro do meu estado data meu token e meu user, sendo este transformado de volta de string para objeto
                token,
                user: JSON.stringify(user) //voltando os dados do usuário que estavam armazenados no tipo texto para o tipo objeto
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user:data.user,
            loading,
            setLoading
            }}  
            >
            {children}
        </AuthContext.Provider>
    )
}

//inicializando meu contexto e identificando qual contexto será usado

function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth };