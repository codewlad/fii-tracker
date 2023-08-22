import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto 8rem 11rem 15rem 11rem 11rem 11rem 8rem 8rem;
    gap: .2rem;
    font: ${({ theme }) => theme.FONTS.NUNITO_16};
    color: ${({ theme }) => theme.COLORS.BLACK};

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .5rem;
        padding: .8rem;
    }

    > div:nth-child(1) {
        grid-column: 1;
        justify-content: left;
    }

    > div:nth-child(2) {
        grid-column: 2;        
    }

    @media (max-width: 1200px) {
        font: ${({ theme }) => theme.FONTS.NUNITO_14};
        grid-template-columns: auto 7rem 10rem 13rem 9rem 9rem 9rem 6rem 7rem;
    }

    @media (max-width: 984px) {
        font: ${({ theme }) => theme.FONTS.NUNITO_14};
        grid-template-columns: 21rem 7rem 10rem 13rem 9rem 9rem 9rem 6rem 7rem;
    }
`;