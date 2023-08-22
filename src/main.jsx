import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { ThemeSlider } from './components/ThemeSlider';
import { themeLight, themeDark } from './styles/theme';
import { themeConfig } from './styles/themeConfig';

/*
<React.StrictMode>
</React.StrictMode>
*/
export function App() {
    const { theme, toggleTheme } = themeConfig();
    const themeMode = theme === "themeLight" ? themeLight : themeDark;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Home />
            <ThemeSlider theme={theme} toggleTheme={toggleTheme} />
        </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);