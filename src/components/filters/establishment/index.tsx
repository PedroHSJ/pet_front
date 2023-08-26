import { useForm } from 'react-hook-form';
import { Form } from '../../forms/Form';
import { Button } from '../../buttons/Button';
import { InputComponent } from '../../forms/NewInput';
import { useEffect, useState } from 'react';
import { SelectComponent } from '../../forms/NewSelectInput';
import { Tabs, TabsHeader, Tab } from '@material-tailwind/react';
import { TabComponent } from '../../tab';

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

export const Filter = ({ onSubmit }: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});
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
                        options={[
                            {
                                label: 'Ativo',
                                value: '1',
                            },
                            {
                                label: 'Inativo',
                                value: '2',
                            },
                        ]}
                    />

                    <InputComponent
                        className="flex-1"
                        control={control}
                        name="cnpj"
                        label="CNPJ"
                        type="text"
                    />
                    <InputComponent
                        className="flex-1"
                        control={control}
                        name="name"
                        label="Nome"
                        type="text"
                    />
                </div>
                <Button style="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        </div>
    );
};

Filter.defaultProps = {
    name: false,
    email: false,
    phone: false,
};

// <div className="flex shadow rounded my-4">
//     <div className=" flex-1 mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
//         <Form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex gap-2  ">
//                 {options?.name && (
//                     <InputComponent
//                         className="flex-1"
//                         control={control}
//                         name="name"
//                         label={options.name}
//                         type="text"
//                     />
//                 )}
//                 {options?.email && (
//                     <InputComponent
//                         className="flex-1"
//                         control={control}
//                         name="email"
//                         label={options.email}
//                         type="text"
//                     />
//                 )}
//                 {options?.phone && (
//                     <InputComponent
//                         className="flex-1"
//                         control={control}
//                         name="phone"
//                         label={options.phone}
//                         type="text"
//                     />
//                 )}
//                 {options?.crmv && (
//                     <InputComponent
//                         className="flex-1"
//                         control={control}
//                         name="crmv"
//                         label={options.crmv}
//                         type="text"
//                     />
//                 )}
//                 {options?.cnpj && (
//                     <InputComponent
//                         className="flex-1"
//                         control={control}
//                         name="cnpj"
//                         label={options.cnpj}
//                         type="text"
//                     />
//                 )}
//                 {options?.active && (
//                     <SelectComponent
//                         className="bg-red-500"
//                         control={control}
//                         name="active"
//                         label="Status"
//                         options={[
//                             { label: 'Ativo', value: '1' },
//                             { label: 'Inativo', value: '0' },
//                         ]}
//                     />
//                 )}
//             </div>

//             <Button style="primary" type="submit">
//                 Buscar
//             </Button>
//         </Form>
//     </div>
// </div>
