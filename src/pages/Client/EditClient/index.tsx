import { useLocation, useNavigate } from 'react-router';
import { Template } from '../../../components/layouts/Template';
import { IClient } from '../../../interfaces/IClient';

export const EditClient = () => {
    //getting user from location state
    const location = useLocation();
    const user = location.state as IClient;
    const navigate = useNavigate();

    return (
        <Template>
            <div className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div
                        className="
                    flex
                    items-center
                    justify-between
                    flex-row-reverse
                    "
                    >
                        <div className="flex justify-end">
                            <button
                                onClick={() => navigate(-1)}
                                className="
                        flex
                        items-center
                        justify-center
                        px-4
                        py-2
                        border
                        border-transparent
                        rounded-md
                        shadow-sm
                        text-sm
                        font-medium
                        text-white
                        bg-gray-600
                        hover:bg-gray-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-gray-500
                        "
                            >
                                Voltar
                            </button>
                        </div>
                        <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900">
                            Editar Cliente
                        </h1>
                    </div>
                    <div className="flex space-x-3">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={user.id}
                            alt=""
                        />
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">
                                    {user.name}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};
