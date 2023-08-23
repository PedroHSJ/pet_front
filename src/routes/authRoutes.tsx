import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Video from '../pages/Video';
import Login from '../pages/Login';
import Professional from '../pages/Professional';
import Establishment from '../pages/Establishment';
import Profile from '../pages/Profile';
import { Client } from '../pages/Client';
import { EditClient } from '../pages/Client/EditClient';
import { NewProfessional } from '../pages/Professional/NewProfessional';
import { Schedule } from '../pages/Schedule';
import { ScheduleInfo } from '../pages/ScheduleInfo';

export const AuthRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/profissionais',
        element: <Professional />,
    },
    {
        path: '/cadastrarProfissional',
        element: <NewProfessional />,
    },
    {
        path: '/estabelecimentos',
        element: <Establishment />,
    },
    {
        path: '/perfil',
        element: <Profile />,
    },
    {
        path: '/clientes',
        element: <Client />,
    },
    {
        path: '/editClient',
        element: <EditClient />,
    },
    //schedule id
    {
        path: '/agendamentos',
        element: <Schedule />,
    },
    {
        path: '/agendamento/info',
        element: <ScheduleInfo />,
    },
    {
        path: '/agendamento/:id',
        element: <Video />,
    },
    {
        path: '*', // qualquer rota que não foi definida anteriormente
        element: <Navigate to="/home" replace />,
    },
]);
