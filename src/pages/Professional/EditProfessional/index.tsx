import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import {
    IProfessional,
    IProfessionalDTO,
} from '../../../interfaces/IProfessional';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfessionalSchema } from '../../../validations/ProfessionalSchema';
import { InputComponent } from '../../../components/forms/NewInput';
import { useProfessional } from '../../../hooks/useProfessional';
import { useEffect, useState } from 'react';
import { useComponent } from '../../../hooks/useComponent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Switch, Typography } from '@material-tailwind/react';
import { SelectComponent } from '../../../components/forms/NewSelectInput';
import { SwitchComponent } from '../../../components/forms/SwitchComponent';
import { useLocation } from 'react-router-dom';
import { SwitchGenericComponent } from '../../../components/forms/SwitchGenericComponent';

export const EditProfessional = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm<IProfessionalDTO>();
    const [changePassword, setChangePassword] = useState(false);
    const navigate = useNavigate();
    const { error, loading, success, updateProfessional } = useProfessional();
    const { dialog } = useComponent();
    const location = useLocation();
    const professional = location.state as IProfessional;

    const verifyPassword = (value: string) => {
        const password = getValues('password');
        if (password !== value) {
            return false;
        }
        return true;
    };

    const onSubmit = async (data: any) => {
        if (changePassword && !verifyPassword(data.confirmPassword)) {
            toast.error('As senhas não conferem!');
            return;
        }
        //removendo password e confirmPassword do objeto
        if (!changePassword) {
            delete data.password;
            delete data.confirmPassword;
        }

        updateProfessional(professional.id, data);
    };

    useEffect(() => {
        if (!success) return;
        toast.success('Profissional atualizado com sucesso!');
        navigate(-1);
    }, [success]);

    useEffect(() => {
        if (!professional) return;
        setValue('name', professional.name);
        setValue('phone', professional.phone);
        setValue('email', professional.email);
        setValue('active', professional.active);
        setValue('crmv', professional.crmv);
    }, [professional]);

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Editar Profissional
                    </h1>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => navigate('/profissionais')}
                    >
                        Voltar
                    </button>
                </div>

                <div className=" mx-auto p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row gap-4">
                            <InputComponent
                                control={control}
                                name="name"
                                label="Nome"
                                error={errors.name?.message}
                                type="text"
                            />
                            <InputComponent
                                control={control}
                                name="phone"
                                label="Telefone"
                                error={errors.phone?.message}
                                type="text"
                                mask="phone"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <InputComponent
                                control={control}
                                name="crmv"
                                label="CRMV"
                                error={errors.crmv?.message}
                                type="string"
                                mask="crmv"
                            />
                            <InputComponent
                                control={control}
                                name="email"
                                label="Email"
                                error={errors.email?.message}
                                type="email"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <SwitchComponent
                                control={control}
                                name="active"
                                error={errors.active?.message}
                            />

                            <div>
                                <Typography
                                    color="gray"
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Alterar Senha
                                </Typography>
                                <Switch
                                    color="green"
                                    onChange={() =>
                                        setChangePassword(!changePassword)
                                    }
                                    checked={changePassword}
                                    ripple={false}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <InputComponent
                                control={control}
                                name="password"
                                label="Senha"
                                error={errors.password?.message}
                                type="password"
                                disabled={!changePassword}
                            />
                            <InputComponent
                                control={control}
                                name="confirmPassword"
                                label="Confirmar Senha"
                                error={errors.confirmPassword?.message}
                                type="password"
                                disabled={!changePassword}
                            />
                        </div>

                        <Button loading={loading} style="primary" type="submit">
                            Salvar
                        </Button>
                    </Form>
                </div>
            </div>
        </Template>
    );
};
