import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    height: 4.8rem;
    max-width: 37.2rem;

    border-radius: .5rem;
    padding: 1.2rem 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: .8rem;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        
        font-size: 1.6rem;
        
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-size: 1.6rem; 
        }
    }

    > svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`