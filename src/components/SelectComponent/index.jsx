import React from 'react';
import Select from 'react-select';
import { Container } from './styles';
import { useTheme } from 'styled-components';

export function SelectComponent({defaultValue, options, ...rest}) {

    const { COLORS, FONTS } = useTheme();

    const selectComponentStyle = {

        control: ({ boxShadow, ...provided }) => ({
            ...provided,
            border: 'none',
            backgroundColor: 'transparent',
        }),

        container: (provided) => ({
            ...provided,
            width: '100%',
        }),

        input: (provided) => ({
            ...provided,
            font: `${FONTS.NUNITO_16}`,
            fontWeight: 'normal',
            color: `${COLORS.BLACK}`,
        }),

        placeholder: (provided) => ({
            ...provided,
            font: `${FONTS.NUNITO_16}`,
        }),

        menu: (provided) => ({
            ...provided,
            font: `${FONTS.NUNITO_16}`,
            color: `${COLORS.DARK_100}`,
            backgroundColor: `${COLORS.LIGHT_100}`,
            border: `1px solid ${COLORS.BLUE_100}`,
        }),

        option: (provided, state) => ({
            ...provided,
            font: `${FONTS.NUNITO_16}`,
            backgroundColor: state.isSelected ? `${COLORS.BLUE_100}` : 'none',
            margin: '0 .4rem',
            width: 'Calc(100% - .8rem)',
            borderRadius: '.3rem',
            ":hover": {
                backgroundColor: `${COLORS.BLUE_200}`,
                color: "white"
            },
        }),

        indicatorSeparator: (provided, state) => ({
            ...provided,
            backgroundColor: `${COLORS.BLUE_200}`,
        }),

        singleValue: (provided, state) => ({
            ...provided,
            font: `${FONTS.NUNITO_16}`,
            color: `${COLORS.BLACK}`,
        }),
    }

    return(
        <Container>
            <Select
                defaultValue={options[0]}
                options={options}
                styles={selectComponentStyle}
                placeholder="Selecione..."
                noOptionsMessage={() => "Opção não encontrada."}
                {...rest}
            />
        </Container>
    )
}