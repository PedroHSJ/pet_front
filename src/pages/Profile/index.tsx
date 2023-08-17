import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';

const Profile = () => {
    const { user } = useAuth();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <Template>
            <div className="bg-white shadow h-screen">
                <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Olá, {user?.name}!
                    </h1>
                    {/* CARD WITH INFOS */}
                    <div className="mt-5">
                        {/* CARD 1 */}
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Nome
                                    </dt>
                                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                        {user?.name}
                                    </dd>
                                </dl>

                                <dl className="mt-4">
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Email
                                    </dt>
                                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                                        {user?.email}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
};

export default Profile;
