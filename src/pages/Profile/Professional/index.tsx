import { IProfessional } from '../../../interfaces/IProfessional';
import { formatPhoneNumber } from '../../../utils/format';

interface IProfileProfessionalProps {
    professional: IProfessional | null;
}

export const ProfileProfessional = ({
    professional,
}: IProfileProfessionalProps) => {
    return (
        <div className="bg-white shadow h-screen">
            <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Olá, {professional?.name}!
                </h1>
            </div>

            {/* CARD WITH INFOS */}
            <div className="mt-5">
                {/* CARD 1 */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Nome
                            </dt>
                            <dd className="mt-1 text-xl font-semibold text-gray-900">
                                {professional?.name}
                            </dd>
                        </dl>

                        <dl className="mt-4">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Email
                            </dt>
                            <dd className="mt-1 text-xl font-semibold text-gray-900">
                                {professional?.email}
                            </dd>
                        </dl>
                        <dl className="mt-4">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                Número de telefone
                            </dt>
                            <dd className="mt-1 text-xl font-semibold text-gray-900">
                                {formatPhoneNumber(professional?.phone)}
                            </dd>
                        </dl>
                        <dl className="mt-4">
                            <dt className="text-sm font-medium text-gray-500 truncate">
                                CRMV
                            </dt>
                            <dd className="mt-1 text-xl font-semibold text-gray-900">
                                {professional?.crmv}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};
