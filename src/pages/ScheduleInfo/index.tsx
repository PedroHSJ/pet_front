import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from '@material-tailwind/react';
import { Template } from '../../components/layouts/Template';
import { ISchedule } from '../../interfaces/ISchedule';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { formatDate } from '../../utils/format';

export const ScheduleInfo = () => {
    const location = useLocation();
    const schedule = location.state as ISchedule;
    const navigate = useNavigate();

    return (
        <>
            <Template>
                <div className="flex flex-col">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <div className="flex-col">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                        Agenda
                                    </h1>
                                    <Button
                                        key={1}
                                        type="button"
                                        className="bg-primary hover:bg-primary_hover"
                                        onClick={() => {
                                            navigate(-1);
                                        }}
                                    >
                                        Voltar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="flex flex-row justify-center items-center">
                        <Card className="mt-6 w-96 sm:w-1/2">
                            <CardBody>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-2"
                                >
                                    {schedule.client.name}
                                </Typography>
                                <Typography>
                                    {schedule.establishment.name}
                                </Typography>

                                <Typography>
                                    {schedule.professional.name}
                                </Typography>
                                <div className="flex flex-row items-center">
                                    <AiFillCalendar size={20} color="black" />
                                    <Typography className="ml-2">
                                        {formatDate(
                                            schedule.day.substring(0, 10),
                                        )}
                                    </Typography>
                                </div>
                                <div className="flex flex-row items-center">
                                    <AiOutlineClockCircle
                                        size={20}
                                        color="black"
                                    />
                                    <Typography className="ml-2">
                                        {formatDate(
                                            schedule.day.substring(11, 16),
                                        )}
                                        h
                                    </Typography>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    className="bg-primary hover:bg-primary_hover"
                                    key={1}
                                    type="button"
                                    onClick={() => {}}
                                >
                                    Entrar na sala
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Template>
        </>
    );
};
