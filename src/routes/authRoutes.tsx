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
import { NewEstablishment } from '../pages/Establishment/NewEstablishment';
import { Schedule } from '../pages/Schedule';
import { MedicalCare } from '../pages/MedicalCare';
import { EditProfessional } from '../pages/Professional/EditProfessional';

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
        path: '/editarProfissional',
        element: <EditProfessional />,
    },
    {
        path: '/estabelecimentos',
        element: <Establishment />,
    },
    {
        path: '/cadastrarEstabelecimento',
        element: <NewEstablishment />,
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
        path: '/atendimento',
        element: <MedicalCare />,
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
