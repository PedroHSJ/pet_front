import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Template } from '../../../components/layouts/Template';
import { Form } from '../../../components/forms/Form';
import { InputComponent } from '../../../components/forms/NewInput';
import { useController, useForm } from 'react-hook-form';
import { SwitchComponent } from '../../../components/forms/SwitchComponent';
import { Button } from '../../../components/buttons/Button';
import { IEstablishment } from '../../../interfaces/IEstablishment';
import { useEffect } from 'react';
import { useCep } from '../../../hooks/useCep';

export const EditEstablishment = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<any>({});
    const location = useLocation();
    const establishment = location.state as IEstablishment;
    const { getCep, cep } = useCep();

    useEffect(() => {
        if (!establishment) return;
        console.log(establishment);
        setValue('name', establishment.name);
        setValue('address.postalCode', establishment.address.postalCode);
        setValue('address.active', establishment.active);
    }, [establishment]);

    useEffect(() => {
        if (!establishment.address) return;
        getCep(establishment.address.postalCode);
    }, [establishment]);

    useEffect(() => {
        if (!cep) return;
        setValue('address.city', cep.city);
        setValue('address.neighborhood', cep.neighborhood);
        setValue('address.street', cep.street);
    }, [cep]);

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Editar estabelecimento
                    </h1>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => navigate(-1)}
                    >
                        Voltar
                    </button>
                </div>

                <div className=" mx-auto p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={() => {}}>
                        <InputComponent
                            control={control}
                            name="name"
                            label="Nome fantasia"
                            error={errors.name?.message}
                            type="text"
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

                        <Button loading={true} style="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </div>
            </div>
        </Template>
    );
};
