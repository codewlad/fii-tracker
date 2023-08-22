import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

	#root {
		min-height: 100vh;
	}
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
		margin: 0;
		min-height: 100vh;
		font-size: 1.6rem;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    ::-webkit-scrollbar {
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
        border-radius: 0.5rem;
    }

    * {
        scrollbar-color: ${({ theme }) => theme.COLORS.BLUE_100} transparent;
    }

    *::-moz-scrollbar-thumb {
        background-color: red;
        border-radius: 0.5rem;
    }

    ::-ms-scrollbar {
        width: 0.5rem;
    }

    ::-ms-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
        border-radius: 0.5rem;
    }
`;