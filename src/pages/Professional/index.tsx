import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useProfessional } from '../../hooks/useProfessional';
import { Loading } from '../../components/resources/Loading';
import { Pagination } from '../../components/pagination';
import { IProfessional } from '../../interfaces/IProfessional';
import { Filter } from '../../components/filter';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router';

const Professional = () => {
    const { error, loading, professionals, getAll, totalCount, getByParams } =
        useProfessional();
    const { role } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(professionals);
    // }, [professionals]);

    useEffect(() => {
        getAll();
    }, []);

    const handleFilter = (data: any) => {
        getByParams(data);
    };

    const handleProfessionalClick = (row: IProfessional) => {
        console.log(row);
    };

    return (
        <Template>
            <div className="bg-white shadow">
                {loading ? (
                    <div
                        className="
                     flex 
                     items-center 
                     justify-center 
                     h-screen
                     flex-col
                     "
                    >
                        <Loading size={30} />
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Carregando...
                        </span>
                    </div>
                ) : (
                    <div>
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <div className="flex-col">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                        Profissionais
                                    </h1>
                                    {role === 'ADMIN' && (
                                        <button
                                            type="button"
                                            className="bg-primary text-sm flex-end text-white rounded p-2"
                                            onClick={() => {
                                                navigate(
                                                    '/cadastrarProfissional',
                                                );
                                            }}
                                        >
                                            Cadastrar
                                        </button>
                                    )}
                                </div>
                                <Filter
                                    onSubmit={(data) => {
                                        handleFilter(data);
                                    }}
                                />
                            </div>
                            <ul
                                role="list"
                                className="divide-y divide-gray-100"
                            >
                                {professionals.map((professional) => {
                                    return (
                                        <li
                                            key={professional.id}
                                            className="p-4 cursor-pointer hover:bg-gray-50 hover:rounded"
                                            onClick={() =>
                                                handleProfessionalClick(
                                                    professional,
                                                )
                                            }
                                        >
                                            <div className="flex space-x-3">
                                                <img
                                                    className="h-12 w-12 rounded-full"
                                                    src={
                                                        'https://avatars.githubusercontent.com/u/60005589?v=4'
                                                    }
                                                    alt=""
                                                />
                                                <div className="flex-1 space-y-1 justify-center">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900">
                                                            {professional.name}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {professional.email}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {professional.crmv}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <Pagination
                            total={totalCount}
                            limit={10}
                            offset={0}
                            setOffset={(offset) => {
                                console.log(offset);
                            }}
                        />
                    </div>
                )}
            </div>
        </Template>
    );
};

export default Professional;
