import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import HomeAdmin from './Admin';
import HomeVet from './Vet';

export const Home = () => {
    const { role } = useAuth();

    return (
        <>
            {role === 'ADMIN' && <HomeAdmin />}
            {role === 'VETERINARIAN' && <HomeVet />}
        </>
    );
};
