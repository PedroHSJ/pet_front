import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { ProfileProfessional } from './Professional';
import { ProfileUser } from './User';

const Profile = () => {
    const { user, professional, role } = useAuth();

    return (
        <Template>
            {role === 'ADMIN' && <ProfileUser user={user} />}
            {role === 'VETERINARIAN' && (
                <ProfileProfessional professional={professional} />
            )}
        </Template>
    );
};

export default Profile;
