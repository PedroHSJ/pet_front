import { useEffect } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { Form } from '../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../components/forms/NewInput';
import { SelectComponent } from '../../components/forms/NewSelectInput';

const Home = () => {
    const { getSchedules, error, loading, schedules } = useSchedule();
    const { getRole } = useAuth();
    const { handleSubmit, control } = useForm();

    useEffect(() => {
        getSchedules();
    }, []);

    useEffect(() => {
        console.log(getRole());
    }, []);

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
    ];

    return (
        <>
            <Template>
                <>
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <SelectComponent
                            control={control}
                            name="name"
                            label="Nome"
                            placeholder="Digite o nome"
                            options={options}
                        />
                        <button type="submit">Enviar</button>
                    </Form>
                </>
            </Template>
        </>
    );
};

export default Home;
