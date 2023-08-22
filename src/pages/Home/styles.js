import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 2.4rem;

    @media (max-width: 398px) {
        padding: 1.2rem;
    }
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: .8rem;
    padding: 1rem;
    margin-bottom: 2.4rem;
`;

export const HeaderFilters = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
        color: ${({ theme }) => theme.COLORS.BLUE_300};
        font: ${({ theme }) => theme.FONTS.NUNITO_24_BOLD};
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 3rem;
        max-height: 3.8rem;
        padding: 0 1rem;

        border: none;
        border-radius: .5rem;
        color: ${({ theme }) => theme.COLORS.DARK_200};
        background-color: ${({ theme }) => theme.COLORS.BLUE_200};
        font: ${({ theme }) => theme.FONTS.NUNITO_16};

        &:hover {
            opacity: .9;
            cursor: pointer;
        }
    }

    @media (max-width: 500px) {
        flex-wrap: wrap;
        column-gap: 2rem;
        row-gap: 1rem;
    }
`;

export const Counters = styled.div`
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    font: ${({ theme }) => theme.FONTS.NUNITO_16_BOLD};

    > span {
        color: ${({ theme }) => theme.COLORS.DARK_100};
        font: ${({ theme }) => theme.FONTS.NUNITO_16_BOLD};
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};

        padding: 0rem .5rem;
        border-radius: 2.3rem;
    }
`;

export const WrappedFilters = styled.div`
    width: 100%;
    display: grid;
    gap: 1.2rem;
    grid-template-columns: calc((100% - (4 * 1.2rem)) / 5) calc((100% - (4 * 1.2rem)) / 5) calc((100% - (4 * 1.2rem)) / 5) calc((100% - (4 * 1.2rem)) / 5) calc((100% - (4 * 1.2rem)) / 5);
    grid-template-rows: auto auto;    

    > div:nth-child(1) {
        grid-row: 1;
        grid-column: 1 / span 2;

        @media (max-width: 510px) {
            grid-column: 1;
        }
    }

    @media (max-width: 1200px) {
        grid-template-columns: calc((100% - (3 * 1.2rem)) / 4) calc((100% - (3 * 1.2rem)) / 4) calc((100% - (3 * 1.2rem)) / 4) calc((100% - (3 * 1.2rem)) / 4);
    }

    @media (max-width: 1000px) {
        grid-template-columns: calc((100% - (2 * 1.2rem)) / 3) calc((100% - (2 * 1.2rem)) / 3) calc((100% - (2 * 1.2rem)) / 3);
    }

    @media (max-width: 750px) {
        grid-template-columns: calc((100% - 1.2rem) / 2) calc((100% - 1.2rem) / 2);
    }

    @media (max-width: 510px) {
        grid-template-columns: 100%;
    }
`;

export const WrappedFii = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .2rem;
    padding-bottom: 1.2rem;

    div:nth-child(odd) div {
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    div:nth-child(even) div {
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    @media (max-width: 1000px) {
        overflow-x: auto;
        //user-select: none;
    }
`;

export const Message = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    font: ${({ theme }) => theme.FONTS.NUNITO_24_BOLD};
`;