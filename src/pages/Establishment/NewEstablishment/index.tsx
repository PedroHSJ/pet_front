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
import { useCep } from '../../../hooks/useCep';
import { SelectComponent } from '../../../components/forms/NewSelectInput';

export const NewEstablishment = () => {
    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<IEstablishmentDTO>({
        resolver: yupResolver(EstablishmentSchema)
    });
    const navigate = useNavigate();
    const { createEstablishment, success, loading, error} = useEstablishment();
    const { getCep, cep, error: errorCep, loading: loadingCep  } = useCep();
    const { dialog } = useComponent();

    const inputCep = watch("address.postalCode");

    const onSubmit = async (data: IEstablishmentDTO) => {
        createEstablishment(data);
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
        if (error) {
            toast.error(error);
        }
        return;
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
                            label="Digite a cidade"
                            error={errors.address?.city?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.neighborhood"
                            label="Digite o bairro"
                            error={errors.address?.neighborhood?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.street"
                            label="Digite a rua"
                            error={errors.address?.street?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.number"
                            label="Digite o número"
                            error={errors.address?.number?.message}
                            type="text"
                        />
                        <InputComponent
                            control={control}
                            name="address.complement"
                            label="Digite o complemento"
                            error={errors.address?.complement?.message}
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
