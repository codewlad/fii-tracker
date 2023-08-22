import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
`;

export const FilterName = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.DARK_100};
    font: ${({ theme }) => theme.FONTS.NUNITO_14_BOLD};
`;