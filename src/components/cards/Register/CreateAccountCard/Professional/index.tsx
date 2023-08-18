import { useLocation, useNavigate } from 'react-router';
import {
    IChoseRole,
    IRegisterProfessionalForm,
} from '../../../../../interfaces/IRegisterForm';
import { useComponent } from '../../../../../hooks/useComponent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Role } from '../../../../../interfaces/IRole';
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
import { RegisterProfessional } from '../../../../../validations/RegisterSchema';

export const ProfessionalCard = () => {
    const location = useLocation();
    const state = location.state as IChoseRole;
    const navigate = useNavigate();
    const { dialog } = useComponent();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IRegisterProfessionalForm>({
        resolver: yupResolver(RegisterProfessional),
    });

    const roleOptions = [
        { key: Role.ADMIN, label: 'Administrador' },
        { key: Role.VETERINARIAN, label: 'Veterinário' },
    ];

    const onSubmit = async (data: IRegisterProfessionalForm) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
        };
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
                    placeholder="Fernando Henrique"
                    label="Digite o nome completo"
                    type="text"
                    error={errors.name?.message}
                />
                <Input
                    control={control}
                    name="crmv"
                    placeholder="178.869.511.826"
                    label="Digite o CRMV"
                    type="text"
                    error={errors.crmv?.message}
                />
                <Input
                    control={control}
                    name="phone"
                    placeholder="(83) 9 9999-9999"
                    label="Digite o telefone"
                    type="text"
                    error={errors.phone?.message}
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
