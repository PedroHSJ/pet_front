import { useForm } from 'react-hook-form';
import { Form } from '../forms/Form';
import { Button } from '../buttons/Button';
import { InputComponent } from '../forms/NewInput';
import { useEffect, useState } from 'react';

interface IOptions {
    name?: string;
    email?: string;
    phone?: string;
    crmv?: string;
    cnpj?: string;
}

interface IFilterProps {
    options?: IOptions;
}

export const Filter = ({ options }: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex shadow rounded my-4">
            <div className=" flex-1 mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2  bg-red-50">
                        {options?.name && (
                            <InputComponent
                                control={control}
                                name="name"
                                label={options.name}
                                type="text"
                            />
                        )}
                        {options?.email && (
                            <InputComponent
                                control={control}
                                name="email"
                                label={options.email}
                                type="text"
                            />
                        )}
                        {options?.phone && (
                            <InputComponent
                                control={control}
                                name="phone"
                                label={options.phone}
                                type="text"
                            />
                        )}
                        {options?.crmv && (
                            <InputComponent
                                control={control}
                                name="crmv"
                                label={options.crmv}
                                type="text"
                            />
                        )}
                        {options?.cnpj && (
                            <InputComponent
                                control={control}
                                name="cnpj"
                                label={options.cnpj}
                                type="text"
                            />
                        )}
                    </div>

                    <Button style="primary" type="submit">
                        Buscar
                    </Button>
                </Form>
            </div>
        </div>
    );
};

Filter.defaultProps = {
    name: false,
    email: false,
    phone: false,
};
