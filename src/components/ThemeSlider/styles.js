import styled from 'styled-components';

export const Container = styled.div`
    width: 8rem;
    position: fixed;
    top: 2.4rem;
    right: .4rem;
    z-index: 999;
    animation: leftToRight 0.3s ease-in;

    .moveRight{
        transform: translateX(4rem);
    }

    .fadeIn {
        opacity: 1;
    }

    @media (max-width: 398px) {
        right: -.8rem;
        top: 1.2rem;
    }
`;

export const Content = styled.div`
    width: 6rem;
    height: 2.4rem;
    display: flex;
    position: relative;
    cursor: pointer;

    background: ${({ theme }) => theme.COLORS.LIGHT_200};
    border-radius: 0.8rem;
`;

export const ButtonLight = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    opacity: 0;
    transition: all 0.3s ease;

    > img {
        width: 2rem;
        height: 2rem;
    }
`;

export const ButtonDark = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.2rem;
    left: -0.3rem;
    opacity: 0;
    transition: all 0.3s ease;

    > img {
        width: 2rem;
        height: 2rem;
    }
`;