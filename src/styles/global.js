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
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      border-radius: 8px;
    }
    }

    body {
        background-color: ${({theme}) => theme.COLORS.DARK_400}; 
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        font-family: 'Roboto', sans-serif;

        -webkit-font-smoothing: antialiased;
    }

    select, button, textarea {
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