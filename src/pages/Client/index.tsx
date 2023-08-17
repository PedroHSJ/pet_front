import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { Loading } from '../../components/resources/Loading';
import { useClient } from '../../hooks/useClient';
import { IClient } from '../../interfaces/IClient';
import { useNavigate, useParams } from 'react-router';

export const Client = () => {
    const { clients, error, getAll, loading } = useClient();
    const navigate = useNavigate();

    useEffect(() => {
        getAll();
    }, []);

    const handleClickClient = (row: IClient) => {
        console.log(row);
        navigate(`/editClient`, { state: row });
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
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Clientes
                            </h1>
                            <ul
                                role="list"
                                className="divide-y divide-gray-100"
                            >
                                {clients.map((client) => {
                                    return (
                                        <li
                                            key={client.id}
                                            className="py-4 cursor-pointer"
                                            onClick={() =>
                                                handleClickClient(client)
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
                                                            {client.name}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {client.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </Template>
    );
};
