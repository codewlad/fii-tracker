import { Container } from './styles';

export function Input({autoComplete = 'off',...rest}){
    return(
        <Container>
            <input {...rest} />
        </Container>
    )
}