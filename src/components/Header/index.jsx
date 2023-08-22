import icon from '../../assets/icon.png';
import { Container, Title, Subtitle } from './styles';

export function Header(){
    return(
        <Container>
            <Title>
                <img src={icon} alt='Ícone de uma casa azul' />
                <h1>FII Tracker</h1>
            </Title>
            <Subtitle>Rastreie e filtre seus fundos imobiliários favoritos</Subtitle>
        </Container>
    )
}