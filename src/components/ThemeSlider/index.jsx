import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import btnLight from '../../assets/btn-light.svg';
import btnDark from '../../assets/btn-dark.svg';
import { Container, Content, ButtonLight, ButtonDark } from './styles';

export function ThemeSlider({toggleTheme}) {

    ThemeSlider.propTypes = {
        toggleTheme: PropTypes.func.isRequired
    };

    const contentRef = useRef(null);
    const buttonLightRef = useRef(null);
    const buttonDarkRef = useRef(null);

    function checkTheme() {
        const localTheme = window.localStorage.getItem("@fiitracker:theme");
        
        if (localTheme === "themeLight") {
            buttonLightRef.current.classList.add("fadeIn");
            buttonDarkRef.current.classList.remove("fadeIn");
            buttonLightRef.current.classList.remove("moveRight");
            buttonDarkRef.current.classList.remove("moveRight");
        } else {
            buttonLightRef.current.classList.remove("fadeIn");
            buttonDarkRef.current.classList.add("fadeIn");
            buttonLightRef.current.classList.add("moveRight");
            buttonDarkRef.current.classList.add("moveRight");
        }
    }

    function changeMode() {
        toggleTheme();
        checkTheme();
    }

    useEffect(() => {
        checkTheme();
    }, []);

    return (
        <Container>
            <Content onClick={changeMode} ref={contentRef} className="Content">
                <ButtonLight ref={buttonLightRef} className="ButtonLight"><img src={btnLight} alt="Ir para tema escuro" /></ButtonLight>
                <ButtonDark ref={buttonDarkRef} className="ButtonDark"><img src={btnDark} alt="Ir para tema claro" /></ButtonDark>
            </Content>
        </Container>
    );
}