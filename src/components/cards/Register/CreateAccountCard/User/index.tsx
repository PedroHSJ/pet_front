import { useLocation, useNavigate } from 'react-router';
import {
    IChoseRole,
    IRegisterForm,
} from '../../../../../interfaces/IRegisterForm';
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
import Input from '../../../../forms/Input';
import { SelectInput } from '../../../../forms/SelectInput';
import { Button } from '../../../../buttons/Button';

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
        { key: Role.ADMIN, label: 'Administrador' },
        { key: Role.VETERINARIAN, label: 'Veterinário' },
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
            if (option.key === state.role) {
                const role: Role = Role[option.key];
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
                <Input
                    control={control}
                    name="name"
                    placeholder="Digite o nome completo"
                    label="Digite o nome completo"
                    type="text"
                    error={errors.name?.message}
                />
                <Input
                    control={control}
                    name="email"
                    placeholder="email@email.com"
                    label="Digite o email"
                    type="text"
                    error={errors.email?.message}
                />
                <Input
                    control={control}
                    name="password"
                    placeholder="Digite a senha"
                    label="Digite a senha"
                    type="password"
                    error={errors.password?.message}
                />

                <SelectInput
                    control={control}
                    label="Tipo de usuário"
                    name="role"
                    error={errors.role?.message}
                    options={roleOptions}
                    disabled
                />
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
};
