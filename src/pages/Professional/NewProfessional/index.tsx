import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import { IProfessionalDTO } from '../../../interfaces/IProfessional';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfessionalSchema } from '../../../validations/ProfessionalSchema';
import { InputComponent } from '../../../components/forms/NewInput';
import { useProfessional } from '../../../hooks/useProfessional';
import { useEffect } from 'react';
import { useComponent } from '../../../hooks/useComponent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const NewProfessional = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProfessionalDTO>({
        resolver: yupResolver(ProfessionalSchema),
    });
    const navigate = useNavigate();
    const { createProfessional, error, loading, success } = useProfessional();
    const { dialog } = useComponent();
    const onSubmit = async (data: IProfessionalDTO) => {
        createProfessional(data);
    };

    useEffect(() => {
        if (success) {
            toast.success('Profissional cadastrado com sucesso!');
            navigate(-1);
        }
        return;
    }, [success]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        return;
    }, [error]);

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Cadastrar Profissional
                    </h1>
                </div>

                <div className=" mx-auto p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                        <InputComponent
                            control={control}
                            name="password"
                            label="Senha"
                            error={errors.password?.message}
                            type="password"
                        />
                        <Button loading={loading} style="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </div>
            </div>
        </Template>
    );
};
