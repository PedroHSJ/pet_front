import { useForm } from 'react-hook-form';
import Input from '../forms/Input';
import { Form } from '../forms/Form';
import { Button } from '../buttons/Button';

interface IFilterProps {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    onSubmit: (data: any) => void;
}

export const Filter = ({
    label,
    name,
    placeholder,
    type,
    onSubmit,
}: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    return (
        <div className="flex bg-gray-700 shadow rounded my-2">
            <div className=" flex-1 mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        control={control}
                        name={name}
                        placeholder={placeholder ? placeholder : ''}
                        label={label}
                        type={type ? type : 'text'}
                    />
                    <button
                        type="submit"
                        className="bg-primary text-sm flex-end text-white rounded p-2"
                    >
                        Buscar
                    </button>
                </Form>
            </div>
        </div>
    );
};
