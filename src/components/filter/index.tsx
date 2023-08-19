import { useForm } from 'react-hook-form';
import Input from '../forms/Input';
import { Form } from '../forms/Form';
import { Button } from '../buttons/Button';
import { InputComponent } from '../forms/NewInput';

interface IFilterProps {
    onSubmit: (data: any) => void;
}

export const Filter = ({ onSubmit }: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    return (
        <div className="flex bg-background shadow rounded my-4">
            <div className=" flex-1 mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputComponent
                        control={control}
                        name="name"
                        label="Nome"
                        type="text"
                    />
                    <Button style="primary" type="submit">
                        Buscar
                    </Button>
                </Form>
            </div>
        </div>
    );
};
