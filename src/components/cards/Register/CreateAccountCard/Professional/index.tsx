import { useLocation, useNavigate } from 'react-router';
import {
    IChoseRole,
    IRegisterProfessionalForm,
} from '../../../../../interfaces/IRegisterForm';
import { useComponent } from '../../../../../hooks/useComponent';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Role } from '../../../../../interfaces/IRole';
import { useEffect, useState } from 'react';
import {
    requiredFieldsText,
    warningText,
} from '../../../../../constants/messages';
import { Container, Title } from '../styles';
import { Form } from '../../../../forms/Form';
import Input from '../../../../forms/OldInput';
import { SelectInput } from '../../../../forms/SelectInput';
import { Button } from '../../../../buttons/Button';
import { RegisterProfessional } from '../../../../../validations/RegisterSchema';
import { InputComponent } from '../../../../forms/NewInput';
import { SelectComponent } from '../../../../forms/NewSelectInput';
import { useProfessional } from '../../../../../hooks/useProfessional';
import {
    IProfessional,
    IProfessionalDTO,
} from '../../../../../interfaces/IProfessional';
import { toast } from 'react-toastify';

export const ProfessionalCard = () => {
    const location = useLocation();
    const state = location.state as IChoseRole;
    const navigate = useNavigate();
    const { error, loading, success, getByParams } = useProfessional();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IRegisterProfessionalForm>({
        resolver: yupResolver(RegisterProfessional),
    });
    const [professional, setProfessional] = useState<IProfessionalDTO>(
        {} as IProfessionalDTO,
    );

    const roleOptions = [
        { value: Role.ADMIN, label: 'Administrador' },
        { value: Role.VETERINARIAN, label: 'Veterinário' },
    ];
    const emailExists = async (email: string) => {
        const professional = getByParams({ params: { email: email } });
        return !!professional;
    };

    const onSubmit = async (data: IRegisterProfessionalForm) => {
        // const emailAlreadyExists = await emailExists(data.email);
        // if (emailAlreadyExists) return toast.error('Email já cadastrado');

        const professional: IProfessionalDTO = {
            name: data.name,
            email: data.email,
            crmv: data.crmv,
            password: data.password,
            role: data.role,
            phone: data.phone,
        };
        setProfessional(professional);
        navigate('/register/confirmCode', { state: professional });
        //navigate('/login');
        // loginWithPassword(data);
    };

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
                    placeholder="Fernando Henrique"
                    label="Nome completo"
                    type="text"
                    error={errors.name?.message}
                />
                <InputComponent
                    control={control}
                    name="crmv"
                    placeholder="178.869.511.826"
                    label="CRMV"
                    type="text"
                    error={errors.crmv?.message}
                />
                <InputComponent
                    control={control}
                    name="phone"
                    placeholder="(83) 9 9999-9999"
                    label="Telefone"
                    type="text"
                    mask="phone"
                    error={errors.phone?.message}
                />
                <InputComponent
                    control={control}
                    name="email"
                    placeholder="email@email.com"
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
                <Button style="primary" type="submit" loading={loading}>
                    Próximo
                </Button>
            </Form>
        </Container>
    );
};
