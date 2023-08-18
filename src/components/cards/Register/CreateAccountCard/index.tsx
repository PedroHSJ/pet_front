import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useComponent } from '../../../../hooks/useComponent';
import {
    IChoseRole,
    IRegisterUserForm,
} from '../../../../interfaces/IRegisterForm';
import { Register } from '../../../../validations/RegisterSchema';

import {
    requiredFieldsText,
    warningText,
} from '../../../../constants/messages';
import useUser from '../../../../hooks/useUser';
import { Role } from '../../../../interfaces/IRole';
import { UserCard } from './User';
import { ProfessionalCard } from './Professional';
import { Container, MainContainer } from './styles';

const CreateAccount = () => {
    const location = useLocation();
    const state = location.state as IChoseRole;
    const { create } = useUser();
    const navigate = useNavigate();
    const { dialog } = useComponent();

    const [roleChoosed, setRoleChoosed] = useState<Role>();

    const roleOptions = [
        { key: Role.ADMIN, label: 'Administrador' },
        { key: Role.VETERINARIAN, label: 'Veterinário' },
    ];

    useEffect(() => {
        roleOptions.forEach((option) => {
            if (option.key === state.role) {
                const role: Role = Role[option.key];
                setRoleChoosed(role);
            }
        });
    }, [state]);

    useEffect(() => {
        console.log(roleChoosed);
    }, [roleChoosed]);

    return (
        <MainContainer>
            {roleChoosed === Role.ADMIN && <UserCard />}
            {roleChoosed === Role.VETERINARIAN && <ProfessionalCard />}
        </MainContainer>
    );
};

export default CreateAccount;
