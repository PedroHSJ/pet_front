import { useForm } from 'react-hook-form';
import { Form } from '../../../components/forms/Form';
import Input from '../../../components/forms/Input';
import { Template } from '../../../components/layouts/Template';
import { Button } from '../../../components/buttons/Button';
import { IProfessionalDTO } from '../../../interfaces/IProfessional';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfessionalSchema } from '../../../validations/ProfessionalSchema';

export const NewProfessional = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IProfessionalDTO>({
        resolver: yupResolver(ProfessionalSchema),
    });

    const onSubmit = async (data: IProfessionalDTO) => {
        console.log(data);
    };

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Cadastrar Profissional
                    </h1>
                </div>

                <div className=" mx-auto bg-gray-200 p-10 sm:px-6 lg:px-8 ">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-6">
                            <Input
                                control={control}
                                name="name"
                                label="Nome"
                                placeholder="Digite o nome"
                                error={errors.name?.message}
                                type="text"
                            />
                            <Input
                                control={control}
                                name="phone"
                                label="Telefone"
                                placeholder="Digite o telefone"
                                error={errors.phone?.message}
                                type="number"
                            />
                            <Input
                                control={control}
                                name="crmv"
                                label="CRMV"
                                placeholder="Digite o CRMV"
                                error={errors.crmv?.message}
                                type="number"
                            />
                            <Input
                                control={control}
                                name="email"
                                label="Email"
                                placeholder="Digite o email"
                                error={errors.email?.message}
                                type="email"
                            />
                            <Input
                                control={control}
                                name="password"
                                label="Senha"
                                placeholder="Digite a senha"
                                error={errors.password?.message}
                                type="password"
                            />
                        </div>
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </div>
            </div>
        </Template>
    );
};
