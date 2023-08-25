import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputComponent } from '../../../components/forms/NewInput';
import { useEffect } from 'react';
import { useComponent } from '../../../hooks/useComponent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import { IEstablishmentDTO } from '../../../interfaces/IEstablishment';
import { EstablishmentSchema } from '../../../validations/EstablishmentSchema';
import { useEstablishment } from '../../../hooks/useEstablishment';

export const NewEstablishment = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IEstablishmentDTO>({
        resolver: yupResolver(EstablishmentSchema)
    });
    const navigate = useNavigate();
    
    const { createEstablishment, success, loading, error} = useEstablishment();
    const { dialog } = useComponent();

    const onSubmit = async (data: IEstablishmentDTO) => {
        createEstablishment(data);
    };

    useEffect(() => {
        if (success) {
            toast.success('Estabelecimento cadastrado com sucesso!');
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
                        Cadastrar Estabelecimento
                    </h1>
                </div>

                <div className=" mx-auto p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputComponent
                            control={control}
                            name="name"
                            label="Digite o Nome"
                            error={errors.name?.message}
                            type="text"
                        />
                         <InputComponent
                            control={control}
                            name="cnpj"
                            label="Digite o CNPJ"
                            error={errors.cnpj?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.postalCode"
                            label="Digite o CEP"
                            error={errors.address?.postalCode?.message}
                            type="text"
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
