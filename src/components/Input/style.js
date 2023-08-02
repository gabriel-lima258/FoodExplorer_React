import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    position: relative;

    > label{
        position: absolute;
        left: 6px;
        top: -28px;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
       
        background-color: ${({theme}) => theme.COLORS.DARK_700};
    
    }

    > input {
        height: 48px;
        width: 100%;

        padding: 12px 14px;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-size: 16px; 
        }
    }

    
    > svg {
            margin-left: 16px;
    }
`;