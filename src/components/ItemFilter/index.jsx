import { Container, FilterName } from './styles';

export function ItemFilter({title, children}){
    return(
        <Container >
            <FilterName>{title}</FilterName>
            {children}
        </Container>
    )
}