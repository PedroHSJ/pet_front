import {
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Typography,
} from '@material-tailwind/react';
import { IUser } from '../../../interfaces/IUser';
import { UserIcon } from '@heroicons/react/24/solid';

interface IProfileUserProps {
    user: IUser | null;
}

export const ProfileUser = ({ user }: IProfileUserProps) => {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Card
                    color="transparent"
                    shadow={false}
                    className="w-full max-w-[26rem]"
                >
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                        {/* <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        /> */}
                        <UserIcon
                            strokeWidth={6}
                            className={`w-1/6 text-gray-600 border-2 rounded-full p-1`}
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    {user?.name}
                                </Typography>
                            </div>
                            <Typography color="blue-gray">
                                {/* ICONE DE EMAIL */}

                                {user?.email}
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                        <Typography color="blue-gray">
                            {user?.role.name}
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </header>
    );
};
