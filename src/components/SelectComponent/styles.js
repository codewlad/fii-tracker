import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    max-height: 3.8rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_100};
`;