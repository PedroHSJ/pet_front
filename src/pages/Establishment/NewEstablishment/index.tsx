import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputComponent } from '../../../components/forms/NewInput';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import { IEstablishmentDTO } from '../../../interfaces/IEstablishment';
import { NewEstablishmentSchema } from '../../../validations/EstablishmentSchema';
import { useEstablishment } from '../../../hooks/useEstablishment';
import { useCep } from '../../../hooks/useCep';
import { SwitchComponent } from '../../../components/forms/SwitchComponent';

export const NewEstablishment = () => {
    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<IEstablishmentDTO>({
        resolver: yupResolver(NewEstablishmentSchema),
    });
    const navigate = useNavigate();
    const { createEstablishment, success, loading, error } = useEstablishment();
    const { getCep, cep, error: errorCep, loading: loadingCep } = useCep();

    const inputCep = watch('address.postalCode');

    const onSubmit = async (data: any) => {
        await createEstablishment(data);
    };

    useEffect(() => {
        if (!inputCep) return;
        getCep(inputCep);
    }, [inputCep]);

    useEffect(() => {
        if (!cep) return;
        setValue('address.state', cep.state);
        setValue('address.city', cep?.city);
        setValue('address.neighborhood', cep.neighborhood);
        setValue('address.street', cep.street);
    }, [cep]);

    useEffect(() => {
        if (success) {
            toast.success('Estabelecimento cadastrado com sucesso!');
            navigate(-1);
        }
        return;
    }, [success]);

    useEffect(() => {
        if (!error) return;
        console.log(error);
        toast.error(error);
    }, [error]);

    useEffect(() => {
        if (errorCep) {
            toast.error(errorCep);
        }
        return;
    }, [errorCep]);

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Cadastrar Estabelecimento
                    </h1>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => navigate(-1)}
                    >
                        Voltar
                    </button>
                </div>

                <div className=" mx-auto p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputComponent
                            control={control}
                            name="name"
                            label="Nome fantasia"
                            error={errors.name?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="cnpj"
                            label="CNPJ"
                            error={errors.cnpj?.message}
                            type="text"
                            mask="cnpj"
                        />
                        <InputComponent
                            control={control}
                            name="address.postalCode"
                            label="CEP"
                            error={errors.address?.postalCode?.message}
                            type="text"
                            mask="cep"
                        />
                        <InputComponent
                            control={control}
                            name="address.state"
                            label="Digite a UF do estado"
                            error={errors.address?.state?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.city"
                            label="Cidade"
                            error={errors.address?.city?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.neighborhood"
                            label="Bairro"
                            error={errors.address?.neighborhood?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.street"
                            label="Rua"
                            error={errors.address?.street?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.number"
                            label="Número"
                            error={errors.address?.number?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.complement"
                            label="Complemento"
                            error={errors.address?.complement?.message}
                            type="text"
                        />

                        <SwitchComponent
                            control={control}
                            name="active"
                            error={errors.active?.message}
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
