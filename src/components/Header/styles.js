import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2.4rem;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        width: 3rem;
        margin-right: 1rem;
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.BLUE_300};
        font: ${({ theme }) => theme.FONTS.NUNITO_30_BOLD};
        padding-top: 0.5rem;
    }
`;

export const Subtitle = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.COLORS.DARK_100};
    font: ${({ theme }) => theme.FONTS.NUNITO_16_BOLD};
    padding-top: 1rem;
`;