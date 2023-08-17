import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useEstablishment } from '../../hooks/useEstablishment';
import { Loading } from '../../components/resources/Loading';
import { cnpjMask } from '../../utils/mask';

const Establishment = () => {
    const { error, loading, establishments, getAllEstablishments } =
        useEstablishment();

    useEffect(() => {
        getAllEstablishments();
    }, []);

    useEffect(() => {
        console.log(establishments);
    }, [establishments]);
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
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Estabelecimentos
                            </h1>
                            <ul
                                role="list"
                                className="divide-y divide-gray-100"
                            >
                                {establishments.map((estab) => {
                                    return (
                                        <li
                                            key={estab.id}
                                            className="py-4 cursor-pointer"
                                        >
                                            <div className="flex space-x-3">
                                                <div className="flex-1 space-y-1 justify-center">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900">
                                                            {estab.name}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {cnpjMask(estab.cnpj)}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* <Pagination
                        currentPage={1}
                        numButtons={4}
                        onPageChange={() => {}}
                        pageSize={10}
                        totalCount={totalCount}
                    /> */}
                    </div>
                )}
            </div>
        </Template>
    );
};

export default Establishment;
