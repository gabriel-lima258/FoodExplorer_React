import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    height: 48px;
    max-width: 372px;

    border-radius: 5px;
    padding: 12px 14px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        
        font-size: 16px;
        
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
        width: 24px;
        height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`