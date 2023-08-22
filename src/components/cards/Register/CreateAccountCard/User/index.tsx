import { useLocation, useNavigate } from 'react-router';
import { IChoseRole } from '../../../../../interfaces/IRegisterForm';
import useUser from '../../../../../hooks/useUser';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useComponent } from '../../../../../hooks/useComponent';
import { Role } from '../../../../../interfaces/IRole';
import { Register } from '../../../../../validations/RegisterSchema';
import { useEffect } from 'react';
import {
    requiredFieldsText,
    warningText,
} from '../../../../../constants/messages';
import { Container, Title } from '../styles';
import { Form } from '../../../../forms/Form';
import Input from '../../../../forms/OldInput';
import { SelectInput } from '../../../../forms/SelectInput';
import { Button } from '../../../../buttons/Button';
import { InputComponent } from '../../../../forms/NewInput';
import { SelectComponent } from '../../../../forms/NewSelectInput';

export const UserCard = () => {
    const location = useLocation();
    const state = location.state as IChoseRole;
    const { create } = useUser();
    const navigate = useNavigate();
    const { dialog } = useComponent();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IRegisterForm>({
        resolver: yupResolver(Register),
    });

    const roleOptions = [
        { value: Role.ADMIN, label: 'Administrador' },
        { value: Role.VETERINARIAN, label: 'Veterinário' },
    ];

    const onSubmit = async (data: IRegisterForm) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
        };
        await create(user);
        navigate('/login');
        // loginWithPassword(data);
    };

    useEffect(() => {
        if (!Object.keys(errors).length) return;
        dialog(warningText, requiredFieldsText);
    }, [errors]);

    useEffect(() => {
        roleOptions.forEach((option) => {
            if (option.value === state.role) {
                const role: Role = Role[option.value];
                setValue('role', role);
            }
        });
    }, [state]);

    return (
        <Container>
            <Title>
                Informe os dados a seguir para realizar seu primeiro acesso.
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    control={control}
                    name="name"
                    label="Nome completo"
                    type="text"
                    error={errors.name?.message}
                />
                <InputComponent
                    control={control}
                    name="email"
                    label="Email"
                    type="text"
                    error={errors.email?.message}
                />
                <InputComponent
                    control={control}
                    name="password"
                    label="Senha"
                    type="password"
                    error={errors.password?.message}
                />

                <SelectComponent
                    control={control}
                    label="Tipo de usuário"
                    name="role"
                    error={errors.role?.message}
                    options={roleOptions}
                    disabled
                />
                <Button style="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </Container>
    );
};
