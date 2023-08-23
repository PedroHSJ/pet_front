import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useEstablishment } from '../../hooks/useEstablishment';
import { Loading } from '../../components/resources/Loading';
import { cnpjMask } from '../../utils/mask';
import { Pagination } from '../../components/pagination';

const Establishment = () => {
    const { error, loading, establishments, totalCount, getAllEstablishments } =
        useEstablishment();

    useEffect(() => {
        getAllEstablishments();
    }, []);

    useEffect(() => {
        console.log(establishments);
        establishments.forEach((estab) => {
            console.log(estab.active);
        });
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
                                className="divide-y divide-gray-500"
                            >
                                {establishments.map((estab) => {
                                    return (
                                        <li
                                            key={estab.id}
                                            className="p-4 cursor-pointer hover:bg-gray-200 hover:rounded hover:shadow-lg hover:border-transparent hover:transform hover:scale-105 transition-all duration-200"
                                        >
                                            <div className="flex space-x-3 ">
                                                <div className="flex-1 space-y-1 justify-center ">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900">
                                                            {estab.name}
                                                        </h3>

                                                        {estab.active && (
                                                            <span
                                                                className="
                                                     inline-flex
                                                     items-center
                                                     px-2.5
                                                     py-0.5
                                                     rounded-full
                                                     text-xs
                                                     font-medium
                                                     bg-green-100
                                                     text-green-800
                                                     "
                                                            >
                                                                Ativo
                                                            </span>
                                                        )}

                                                        {!estab.active && (
                                                            <span
                                                                className="
                                                        inline-flex
                                                        items-center
                                                        px-2.5
                                                        py-0.5
                                                        rounded-full
                                                        text-xs
                                                        font-medium
                                                        bg-red-100
                                                        text-red-800
                                                        "
                                                            >
                                                                Inativo
                                                            </span>
                                                        )}
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
                            <Pagination
                                page={1}
                                total={totalCount}
                                onChange={(page) => {
                                    console.log(page);
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </Template>
    );
};

export default Establishment;
