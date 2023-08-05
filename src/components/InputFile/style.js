import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.4rem;

    border-radius: .8rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
      
    > label {
            height: 4.8rem;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: start;

            cursor: pointer;

            background: ${({theme}) => theme.COLORS.DARK_800};

            border-radius: .5rem;
            padding: 1.2rem 3.2rem;

            svg {
                width: 2.4rem;
                height: 2.4rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                margin-right: .8rem;
            }

            input {
                display: none;
            }
    }
    

`;