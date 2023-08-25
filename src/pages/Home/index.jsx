import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { ItemFilter } from '../../components/ItemFilter';
import { Input } from '../../components/Input';
import { SelectComponent } from '../../components/SelectComponent';
import { Container, Filters, HeaderFilters, Counters, WrappedFilters, WrappedFii, Message } from './styles';

export function Home(){

    const { COLORS } = useTheme();

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [inputPaper, setInputPaper] = useState('');
    const [inputPaperValue, setInputPaperValue] = useState('');
    const [inputLiquidity, setInputLiquidity] = useState('');
    const [inputDividend, setInputDividend] = useState('');
    const [inputDividendYield, setInputDividendYield] = useState('');
    const [inputAverageDividendYieldFor12Months, setInputAverageDividendYieldFor12Months] = useState('');
    const [inputAmountOfAssets, setInputAmountOfAssets] = useState('');
    const [selectedPvpaOption, setSelectedPvpaOption] = useState({ value: 'standard', label: 'Padrão' });
    const [selectedSectorOption, setSelectedSectorOption] = useState({ value: 'all', label: 'Todos' });
    const [selectSector, setSelectSector] = useState([ { value: 'all', label: 'Todos' } ]);
    const [fiisCounter, setFiisCounter] = useState(0);
    const [filtersCounter, setFiltersCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    
    const selectClassification = [
        { value: 'standard', label: 'Padrão' },
        { value: 'ascending', label: 'Crescente' },
        { value: 'descending', label: 'Descrescente' }
    ];

    function moveTable() {
        const ele = document.getElementById('fiiList');
        ele.style.cursor = 'grab';
    
        let pos = { top: 0, left: 0, x: 0, y: 0 };
    
        const mouseDownHandler = function (e) {
            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';
    
            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
    
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };
    
        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
    
            // Scroll the element
            ele.scrollTop = pos.top - dy;
            ele.scrollLeft = pos.left - dx;
        };
    
        const mouseUpHandler = function () {
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');
    
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
    
        // Attach the handler
        ele.addEventListener('mousedown', mouseDownHandler);
    }

    function validateInput(inputText) {
        // Remove espaços em branco do input
        inputText = inputText.replace(/\s/g, '');

        if (inputText === '.') {
            //setInputPaperValue(inputText);
            return true;
        }

        // Verifica se o input é um número real com até duas casas decimais
        if (/^(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d{0,2})?$/.test(inputText)) {
            let convertedNumber = parseFloat(inputText);

            if(isNaN(convertedNumber)){
                return true;
            }

            return convertedNumber;
        }

        return false;
    }

    function handleInputPaperValue(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputPaperValue(text)
        }
    }

    function handleInputLiquidity(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputLiquidity(text)
        }
    }

    function handleInputDividend(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputDividend(text)
        }
    }

    function handleInputDividendYield(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputDividendYield(text)
        }
    }

    function handleInputAverageDividendYieldFor12Months(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputAverageDividendYieldFor12Months(text)
        }
    }

    function handleInputAmountOfAssets(text){
        const isValid = validateInput(text)

        if(isValid || text === '0' || text === '0.' || text === '0.0' || text === '.0'){
            setInputAmountOfAssets(text)
        }
    }

    function sortPaperInAscendingOrder(filtered){
        const sortedFiisData = [...filtered]
        sortedFiisData.sort((a, b) => a.paper - b.paper);
        return sortedFiisData
    }
    
    function sortPvpaInAscendingOrder(filtered){
        const sortedFiisData = [...filtered]
        sortedFiisData.sort((a, b) => a.pVpa - b.pVpa);
        return sortedFiisData
    }

    function sortPvpaInDescendingOrder(filtered){
        const sortedFiisData = [...filtered]
        sortedFiisData.sort((a, b) => b.pVpa - a.pVpa);
        return sortedFiisData
    }

    function handleClearFIlters() {
        setInputPaper('')
        setInputPaperValue('')
        setInputLiquidity('')
        setInputDividend('')
        setInputDividendYield('')
        setInputAverageDividendYieldFor12Months('')
        setInputAmountOfAssets('')
        setSelectedPvpaOption({ value: 'standard', label: 'Padrão' })
        setSelectedSectorOption({ value: 'all', label: 'Todos' })
    }
    
    useEffect(() => {

        const filtered = data
            .filter((item) => item.paper.toLowerCase().includes(inputPaper.toLowerCase()))
            .filter((item) => item.paperValue >= inputPaperValue)
            .filter((item) => item.liquidity >= inputLiquidity)
            .filter((item) => item.dividend >= inputDividend)
            .filter((item) => item.dividendYield >= inputDividendYield)
            .filter((item) => item.averageDividendYieldFor12Months >= inputAverageDividendYieldFor12Months)
            .filter((item) => item.amountOfAssets >= inputAmountOfAssets)
        ;

        let filreredAndSorted;

        switch(selectedPvpaOption.value){
            case 'ascending':
                filreredAndSorted = sortPvpaInAscendingOrder(filtered);
                break;
            case 'descending':
                filreredAndSorted = sortPvpaInDescendingOrder(filtered);
                break;
            default:
                filreredAndSorted = sortPaperInAscendingOrder(filtered);
                break;
        }

        if(selectedSectorOption.value !== 'all') {
            filreredAndSorted = filreredAndSorted.filter((item) => item.sector === selectedSectorOption.value);
        }

        setFilteredData(filreredAndSorted);

        let activeFilters = 0;
        inputPaper.length > 0 ? activeFilters += 1 : null;
        inputPaperValue.length > 0 ? activeFilters += 1 : null;
        inputLiquidity.length > 0 ? activeFilters += 1 : null;
        inputDividend.length > 0 ? activeFilters += 1 : null;
        inputDividendYield.length > 0 ? activeFilters += 1 : null;
        inputAverageDividendYieldFor12Months.length > 0 ? activeFilters += 1 : null;
        inputAmountOfAssets.length > 0 ? activeFilters += 1 : null;
        selectedPvpaOption.value !== 'standard' ? activeFilters += 1 : null;
        selectedSectorOption.value !== 'all' ? activeFilters += 1 : null;

        setFiisCounter(filreredAndSorted.length);
        setFiltersCounter(activeFilters);

        filreredAndSorted.length <= 0 ? 
            setMessage('Nenhum registro encontrado.') :
            setMessage('');

    }, [inputPaper, inputPaperValue, inputLiquidity, inputDividend, inputDividendYield, inputAverageDividendYieldFor12Months, inputAmountOfAssets, selectedPvpaOption, selectedSectorOption]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3333/scrape');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao obter os dados:', error);
            }
        }

        fetchData();
        moveTable();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setMessage('carregando ');

        if(data.length > 0){
            setFilteredData(data);
            
            const sectors = [];

            for (const item of data) {
                const sector = item.sector;
                if (!sectors.some(s => s.value === sector)) {
                    sectors.push({ value: sector, label: sector });
                }
            }

            setSelectSector(prevState => [...prevState, ...sectors]);

            setFiisCounter(data.length);
            
            setIsLoading(false);
        }

    }, [data])

    return(      
        <Container>
            <Header />
            {
                !isLoading &&
                <Filters>
                    <HeaderFilters>
                        <h2>Filtros</h2>
                        <Counters>
                            Fiis <span>{fiisCounter}</span> - Filtros ativos <span>{filtersCounter}</span>
                        </Counters>
                        <button onClick={handleClearFIlters}>Limpar filtros</button>
                    </HeaderFilters>
                    <WrappedFilters>
                        <ItemFilter title='Setor:'>
                            <SelectComponent 
                                onChange={setSelectedSectorOption}
                                options={selectSector}
                                value={selectedSectorOption}
                            />
                        </ItemFilter>

                        <ItemFilter title='FII:'>
                            <Input
                                placeholder='Ex: ABCP11'
                                onChange={(e) => setInputPaper(e.target.value)}
                                value={inputPaper}
                            />
                        </ItemFilter>

                        <ItemFilter title='Preço maior ou igual à:'>
                            <Input
                                placeholder='Ex: 61.16'
                                onChange={(e) => handleInputPaperValue(e.target.value)}
                                value={inputPaperValue}
                            />
                        </ItemFilter>

                        <ItemFilter title='Liquidez maior ou igual à:'>
                            <Input
                                placeholder='Ex: 999999'
                                onChange={(e) => handleInputLiquidity(e.target.value)}
                                value={inputLiquidity}
                            />
                        </ItemFilter>

                        <ItemFilter title='Dividendo maior ou igual à:'>
                            <Input
                                placeholder='Ex: 0.41'
                                onChange={(e) => handleInputDividend(e.target.value)}
                                value={inputDividend}
                            />
                        </ItemFilter>

                        <ItemFilter title='Yield (1 mês) maior ou igual à:'>
                            <Input
                                placeholder='Ex: 1.10'
                                onChange={(e) => handleInputDividendYield(e.target.value)}
                                value={inputDividendYield}
                            />
                        </ItemFilter>

                        <ItemFilter title='Yield (12M) maior ou igual à:'>
                            <Input
                                placeholder='Ex: 1.20'
                                onChange={(e) => handleInputAverageDividendYieldFor12Months(e.target.value)}
                                value={inputAverageDividendYieldFor12Months}
                            />
                        </ItemFilter>

                        <ItemFilter title='P/VPA organizar por ordem:'>
                            <SelectComponent 
                                onChange={setSelectedPvpaOption}
                                options={selectClassification}
                                value={selectedPvpaOption}
                            />
                        </ItemFilter>

                        <ItemFilter title='Qtde de ativos maior ou igual à:'>
                            <Input
                                placeholder='Ex: 10'
                                onChange={(e) => handleInputAmountOfAssets(e.target.value)}
                                value={inputAmountOfAssets}
                            />
                        </ItemFilter>
                    </WrappedFilters>
                </Filters>
            }
            <WrappedFii id='fiiList'>
                {
                    filteredData.length > 0 &&
                    <Card
                        key={"header"}
                        content={{
                            sector: "Setor",
                            paper: "FII",
                            paperValue: "Preço",
                            liquidity: "Liquidez",
                            dividend: "Dividendo",
                            dividendYield: "Yield 1M",
                            averageDividendYieldFor12Months: "Yield 12M",
                            pVpa: "P/VPA",
                            amountOfAssets: "Ativos"
                        }}
                        isTitle
                    />
                }
            {
                filteredData.map((item, index) =>(
                    <Card key={index} content={item} />
                ))
            }
            </WrappedFii>
            <Message>
                {
                    isLoading &&
                    <>
                        {message}
                        <ReactLoading type='bubbles' color={COLORS.BLUE_300} height={40} width={50} />
                    </>
                }
                {
                    !isLoading && fiisCounter <= 0 && message
                }          
            </Message>
        </Container>
    )
}