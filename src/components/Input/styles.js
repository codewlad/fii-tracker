import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    padding: .8rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_100};

    > input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;        

        font: ${({ theme }) => theme.FONTS.NUNITO_16};
        color: ${({ theme }) => theme.COLORS.BLACK};
    }
`;