import { useForm } from 'react-hook-form';
import { Form } from '../../forms/Form';
import { Button } from '../../buttons/Button';
import { InputComponent } from '../../forms/NewInput';
import { useEffect, useState } from 'react';
import { SelectComponent } from '../../forms/NewSelectInput';
import { Tabs, TabsHeader, Tab } from '@material-tailwind/react';
import { TabComponent } from '../../tab';
import { yupResolver } from '@hookform/resolvers/yup';

interface IOptions {
    name?: string;
    email?: string;
    phone?: string;
    crmv?: string;
    cnpj?: string;
    active?: string;
    tabValue?: string;
}

interface IFilterProps {
    onSubmit: (data: any) => void;
}

export const FilterProfessional = ({ onSubmit }: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [tabValue, setTabValue] = useState('1');
    const active = [
        {
            label: 'Ativo',
            value: '1',
        },
        {
            label: 'Inativo',
            value: '0',
        },
    ];

    return (
        <div className="my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center w-full max-w-1/2 gap-4">
                    <TabComponent
                        defaultValueComponent={tabValue}
                        name="active"
                        control={control}
                        options={active}
                    />
                    <InputComponent
                        className="flex-1"
                        control={control}
                        name="name"
                        label="nome"
                        type="text"
                    />
                    <InputComponent
                        className="flex-1"
                        control={control}
                        name="email"
                        label="Email"
                        type="text"
                    />
                    <InputComponent
                        className="flex-1"
                        control={control}
                        name="phone"
                        label="Celular"
                        type="text"
                        mask="phone"
                    />
                </div>
                <Button style="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        </div>
    );
};
