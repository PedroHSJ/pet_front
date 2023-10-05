import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import {
    IProfessional,
    IProfessionalEditDTO,
} from '../../../interfaces/IProfessional';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditProfessionalSchema } from '../../../validations/ProfessionalSchema';
import { InputComponent } from '../../../components/forms/NewInput';
import { useProfessional } from '../../../hooks/useProfessional';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Typography } from '@material-tailwind/react';
import { SelectComponent } from '../../../components/forms/NewSelectInput';
import { SwitchComponent } from '../../../components/forms/SwitchComponent';
import { useLocation } from 'react-router-dom';
import { Gender } from '../../../enums/gender.enum';

export const EditProfessional = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        watch,
    } = useForm<IProfessionalEditDTO>({
        resolver: yupResolver(EditProfessionalSchema),
    });

    const navigate = useNavigate();
    const { error, loading, success, updateProfessional } = useProfessional();
    const location = useLocation();
    const professional = location.state as IProfessional;

    const changePassword = watch('changePassword');

    const verifyPassword = (value: string) => {
        const password = getValues('password');
        if (password !== value) {
            return false;
        }
        return true;
    };

    const onSubmit = async (data: any) => {
        if (data.changePassword && !verifyPassword(data.confirmPassword)) {
            toast.error('As senhas não conferem!');
            return;
        }
        //removendo password e confirmPassword do objeto
        if (data.changePassword == false) {
            delete data.password;
            delete data.confirmPassword;
            delete data.changePassword;
        }

        if (data.changePassword == true) {
            delete data.confirmPassword;
            delete data.changePassword;
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
        setValue('gender', professional.gender);
        setValue('phone', professional.phone ? professional.phone : '');
        setValue('email', professional.email);
        setValue('active', professional.active);
        setValue('crmv', professional.crmv);
        setValue('changePassword', false);
    }, [professional]);

    useEffect(() => {
        if (!error) return;
        console.log(error);
        toast.error(error);
    }, [error]);

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

                <div className=" mx-auto p-10 sm:px-6 lg:px-8">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:flex lg:flex-row lg:gap-4">
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

                        <div className="lg:flex lg:flex-row lg:gap-4">
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

                        <div className="lg:flex lg:flex-row lg:gap-5">
                            <div className="flex flex-row lg:w-1/2">
                                <SelectComponent
                                    control={control}
                                    name="gender"
                                    label="Sexo"
                                    error={errors.gender?.message}
                                    type="text"
                                    options={Object.keys(Gender).map((key) => ({
                                        key: Gender[key as keyof typeof Gender],
                                        label: Gender[
                                            key as keyof typeof Gender
                                        ],
                                    }))}
                                />
                            </div>

                            <div className="flex flex-row gap-5 justify-center lg:justify-start lg:w-1/2">
                                <SwitchComponent
                                    control={control}
                                    name="active"
                                    error={errors.active?.message}
                                    showLabel={true}
                                />

                                <div className="flex flex-col justify-center items-center">
                                    <Typography
                                        color="gray"
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Alterar Senha
                                    </Typography>
                                    <SwitchComponent
                                        control={control}
                                        name="changePassword"
                                        error={errors.changePassword?.message}
                                        showLabel={false}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex lg:flex-row lg:gap-4">
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
