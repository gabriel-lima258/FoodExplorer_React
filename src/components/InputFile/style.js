import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
      
    > label {
            height: 48px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: start;

            cursor: pointer;

            background: ${({theme}) => theme.COLORS.DARK_800};

            border-radius: 5px;
            padding: 12px 32px;

            svg {
                width: 24px;
                height: 24px;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                margin-right: 8px;
            }

            input {
                display: none;
            }
    }
    

`;