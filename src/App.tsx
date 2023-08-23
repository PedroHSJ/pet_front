import { ThemeProvider } from 'styled-components';
import { AppProvider } from './hooks';
import { ComponentProvider } from './hooks/useComponent';
import { AppRoutes } from './routes/routes';
import theme from './styles/theme';
import './index.css';
import { ThemeProvider as ThemeProviderMT } from '@material-tailwind/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <ThemeProviderMT>
            <ThemeProvider theme={theme}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                />
                <ComponentProvider>
                    <AppProvider>
                        <AppRoutes />
                    </AppProvider>
                </ComponentProvider>
                <ToastContainer />
            </ThemeProvider>
        </ThemeProviderMT>
    );
};

export default App;
