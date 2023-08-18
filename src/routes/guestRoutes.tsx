import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import CheckRegister from '../pages/Register/CheckRegister';
import CheckUser from '../pages/ForgotPassword/CheckUser';
import ConfirmCode from '../pages/ForgotPassword/ConfirmCode';
import CreateAccount from '../pages/Register/CreateAccount';

export const GuestRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/checkRegister',
        element: <CheckRegister />,
    },
    {
        path: '/checkUser',
        element: <CheckUser />,
    },
    {
        path: '/confirmCode',
        element: <ConfirmCode />,
    },
    {
        path: '/createAccount',
        element: <CreateAccount />,
    },
    {
        path: '*', // qualquer rota que não foi definida anteriormente
        element: <Navigate to="/" replace />,
    },
]);
