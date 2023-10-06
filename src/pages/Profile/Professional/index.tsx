import { UserCircleIcon } from '@heroicons/react/24/outline';
import { IProfessional } from '../../../interfaces/IProfessional';
import { formatPhoneNumber } from '../../../utils/format';
import { ProfileCard } from '../../../components/cards/Profile';
import { PencilIcon, UserIcon } from '@heroicons/react/24/solid';
import { AiOutlineLogout } from 'react-icons/ai';
import { useAuth } from '../../../hooks/auth';
import { useComponent } from '../../../hooks/useComponent';

interface IProfileProfessionalProps {
    professional: IProfessional | null;
}

export const ProfileProfessional = ({
    professional,
}: IProfileProfessionalProps) => {
    const { logout } = useAuth();
    const { dialog } = useComponent();

    const handleLogout = () => {
        dialog(
            'Deseja realmente sair?',
            'Ao sair você será redirecionado para a tela de login.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => {},
                    styleButton: 'secondary',
                },
                {
                    text: 'Sair',
                    onPress: () => {
                        logout();
                    },
                    styleButton: 'primary',
                },
            ],
        );
    };

    return (
        <div className="bg-white shadow h-screen">
            <div className="mx-auto mb-2 flex flex-row items-center gap-1 px-4 py-6 sm:px-6 lg:px-8 ">
                <UserCircleIcon className="h-12 w-12 text-primary" />

                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Olá, {professional?.name}
                </h1>
            </div>

            {/* CARD WITH INFOS */}
            {/* <div className="mt-5">
              
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
            </div> */}

            <ProfileCard first={true}>
                <div className="px-4 py-5 sm:p-6 flex flex-row gap-4">
                    <UserIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-black-500 truncate">
                        Minha conta
                    </span>
                </div>
            </ProfileCard>
            <ProfileCard>
                <div className="px-4 py-5 sm:p-6 flex flex-row gap-4">
                    <PencilIcon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-black-500 truncate">
                        Editar perfil
                    </span>
                </div>
            </ProfileCard>
            <ProfileCard
                last={true}
                onClick={() => {
                    handleLogout();
                }}
            >
                <div className="px-4 py-5 sm:p-6 flex flex-row gap-4">
                    <AiOutlineLogout className="h-6 w-6 text-red-500" />
                    <span className="text-sm font-medium text-black-500 truncate">
                        Sair
                    </span>
                </div>
            </ProfileCard>
        </div>
    );
};
