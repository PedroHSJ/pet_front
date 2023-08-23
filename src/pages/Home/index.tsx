import { useEffect } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { Form } from '../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../components/forms/NewInput';
import { SelectComponent } from '../../components/forms/NewSelectInput';
import { Filter } from '../../components/filter';

const Home = () => {
    const { getSchedules, error, loading, schedules } = useSchedule();
    const { handleSubmit, control } = useForm();

    useEffect(() => {
        getSchedules();
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
                    <header className="bg-white shadow my-8">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                </>
                <Filter
                    key={1}
                    options={{
                        name: 'Nome completo',
                        phone: 'Telefone',
                        email: 'E-mail',
                        crmv: 'CRMV',
                        cnpj: 'CNPJ',
                    }}
                />
            </Template>
        </>
    );
};

export default Home;
