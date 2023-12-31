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
            height: .0rem;
            width: .1rem;   
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        -webkit-text-fill-color: #fff;;
        transition: background-color 5000s ease-in-out 0s;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0; /* Você pode ajustar isso conforme necessário */
    }

   
    option {
    background-color: ${({theme}) => theme.COLORS.DARK_400}; 
    color: white;
    cursor: pointer;
    }

    select:hover {
        color: aliceblue;
    }

  

    select {
    appearance: none; /* Remove a aparência padrão (não é suportado em todos os navegadores) */
    -webkit-appearance: none; /* Para navegadores Webkit (Safari, Chrome) */
    -moz-appearance: none; /* Para Firefox */
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