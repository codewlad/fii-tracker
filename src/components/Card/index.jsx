import { Container } from './styles';

export function Card({content, isTitle = false}){
    
    const { 
        paper,
        sector,
        paperValue,
        liquidity,
        dividend,
        dividendYield,
        averageDividendYieldFor12Months,
        pVpa,
        amountOfAssets,
     } = content;

    return(
        <Container style={isTitle ? ({
                fontWeight: 'bold',
                textTransform: 'uppercase'
                }) : null}>
            <div>{sector}</div>
            <div>{paper}</div>
            <div>{isTitle ? null : 'R$'} {paperValue}</div>
            <div>{isTitle ? null : 'R$'} {liquidity}</div>
            <div>{isTitle ? null : 'R$'} {dividend}</div>
            <div>{dividendYield} {isTitle ? null : '%'}</div>
            <div>{averageDividendYieldFor12Months} {isTitle ? null : '%'}</div>
            <div>{pVpa}</div>
            <div>{amountOfAssets}</div>
        </Container>
    )
}