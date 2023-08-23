import { useEffect } from 'react';
import { Template } from '../../components/layouts/Template';
import useSchedule from '../../hooks/useSchedule';
import { Loading } from '../../components/resources/Loading';
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';
import { formatDate } from '../../utils/format';

export const Schedule = () => {
    const { getSchedules, schedules, loading } = useSchedule();

    useEffect(() => {
        getSchedules();
    }, []);

    useEffect(() => {
        console.log(schedules);
    }, [schedules]);
    return (
        <>
            <Template>
                <div className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex-col">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Agenda
                                </h1>
                            </div>
                        </div>
                        {loading && (
                            <div
                                className="
                              flex 
                              items-center 
                              justify-center 
                              h-screen
                              flex-col
                              "
                            >
                                <Loading />
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    Carregando...
                                </span>
                            </div>
                        )}
                        {!loading && (
                            <div>
                                <List>
                                    {schedules.map((schedule) => {
                                        return (
                                            <ListItem>
                                                <div>
                                                    <div className="flex flex-row">
                                                        <Typography
                                                            variant="h6"
                                                            color="gray"
                                                            className="mr-2"
                                                        >
                                                            Paciente:
                                                        </Typography>
                                                        <Typography
                                                            variant="h6"
                                                            color="blue-gray"
                                                        >
                                                            {
                                                                schedule.client
                                                                    .name
                                                            }
                                                        </Typography>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <Typography
                                                            variant="h6"
                                                            color="gray"
                                                            className="mr-2"
                                                        >
                                                            Data:
                                                        </Typography>
                                                        <Typography
                                                            variant="h6"
                                                            color="blue-gray"
                                                        >
                                                            {formatDate(
                                                                schedule.day.substring(
                                                                    0,
                                                                    10,
                                                                ),
                                                            )}
                                                        </Typography>
                                                    </div>
                                                    <div className="flex flex-row">
                                                        <Typography
                                                            variant="h6"
                                                            color="gray"
                                                            className="mr-2"
                                                        >
                                                            Horário:
                                                        </Typography>
                                                        <Typography
                                                            variant="h6"
                                                            color="blue-gray"
                                                        >
                                                            {schedule.day.substring(
                                                                11,
                                                                16,
                                                            )}
                                                            h
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </div>
                        )}
                    </div>
                </div>
            </Template>
        </>
    );
};
