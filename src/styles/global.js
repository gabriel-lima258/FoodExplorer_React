import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, body * {

        &::-webkit-scrollbar{
            height: .1rem;
            width: .2rem;   
            border: .1rem solid ${({theme}) => theme.COLORS.LIGHT_500};
        }
        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.LIGHT_100};
            border-radius: 1rem;
        }
    }

    body {
        background-color: ${({theme}) => theme.COLORS.DARK_400}; 
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: 'Roboto', sans-serif;

        -webkit-font-smoothing: antialiased;
    }

    input, select, button, textarea {
        font-family: 'Poppins', sans-serif;
        
        font-size: 16px;
        outline: none;
    } 

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    button, input {
        border: none;
        outline: none;
    }
`