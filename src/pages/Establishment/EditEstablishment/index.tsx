import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Template } from '../../../components/layouts/Template';
import { Form } from '../../../components/forms/Form';
import { InputComponent } from '../../../components/forms/NewInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SwitchComponent } from '../../../components/forms/SwitchComponent';
import { Button } from '../../../components/buttons/Button';
import {
    IEstablishment,
    IEstablishmentDTO,
} from '../../../interfaces/IEstablishment';
import { useEffect } from 'react';
import { useCep } from '../../../hooks/useCep';
import { SelectComponent } from '../../../components/forms/NewSelectInput';
import { UF } from '../../../enums/uf.enum';
import { useEstablishment } from '../../../hooks/useEstablishment';
import { toast } from 'react-toastify';
import { EditEstablishmentSchema } from '../../../validations/EstablishmentSchema';

export const EditEstablishment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { getCep, cep } = useCep();
    const establishment = location.state as IEstablishment;
    const { updateEstablishment, loading, error, success } = useEstablishment();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<IEstablishmentDTO>({
        resolver: yupResolver(EditEstablishmentSchema),
    });

    const cepInput = watch('address.postalCode');

    const onSubmit = async (data: IEstablishmentDTO) => {
        await updateEstablishment(data, establishment.id);
    };

    useEffect(() => {
        if (!establishment) return;
        setValue('name', establishment.name);
        setValue('cnpj', establishment.cnpj);
        setValue('address.postalCode', establishment.address.postalCode);
        setValue('active', establishment.active);
    }, [establishment]);

    useEffect(() => {
        if (!establishment.address) return;
        getCep(establishment.address.postalCode);
        if (establishment.address.number)
            setValue('address.number', establishment.address.number);
        if (establishment.address.complement)
            setValue('address.complement', establishment.address.complement);
    }, [establishment]);

    useEffect(() => {
        if (!cep) return;
        setValue('address.state', cep.state);
        setValue('address.city', cep.city);
        setValue('address.neighborhood', cep.neighborhood);
        setValue('address.street', cep.street);
    }, [cep]);

    useEffect(() => {
        if (!cepInput) return;
        if (cepInput.length < 8) return;
        getCep(cepInput);
    }, [cepInput]);

    useEffect(() => {
        if (success) {
            toast.success('Estabelecimento editado com sucesso!');
            navigate(-1);
        }
        return;
    }, [success]);

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
                        <SelectComponent
                            control={control}
                            name="address.state"
                            label="Digite a UF do estado"
                            error={errors.address?.state?.message}
                            type="text"
                            options={Object.values(UF).map((uf) => ({
                                key: uf,
                                label: uf,
                            }))}
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
                            showLabel={true}
                        />

                        <Button loading={loading} style="primary" type="submit">
                            Salvar Edição
                        </Button>
                    </Form>
                </div>
            </div>
        </Template>
    );
};
