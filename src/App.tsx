import { ThemeProvider } from 'styled-components';
import { AppProvider } from './hooks';
import { ComponentProvider } from './hooks/useComponent';
import { AppRoutes } from './routes/routes';
import theme from './styles/theme';
import './index.css';
import { ThemeProvider as ThemeProviderMT } from '@material-tailwind/react';

const App = () => {
    return (
        <ThemeProviderMT>
            <ThemeProvider theme={theme}>
                <ComponentProvider>
                    <AppProvider>
                        <AppRoutes />
                    </AppProvider>
                </ComponentProvider>
            </ThemeProvider>
        </ThemeProviderMT>
    );
};

export default App;
