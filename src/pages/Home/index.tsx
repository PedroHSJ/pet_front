import { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import HomeAdmin from './Admin';
import HomeVet from './Vet';

export const Home = () => {
    const { role } = useAuth();

    useEffect(() => {
        console.log(role);
    }, [role]);

    return (
        <>
            {role === 'ADMIN' && <HomeAdmin />}
            {role === 'VETERINARIAN' && <HomeVet />}
        </>
    );
};
