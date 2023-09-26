import { useEffect, useState } from 'react';
import { Template } from '../../components/layouts/Template';
import useSchedule from '../../hooks/useSchedule';
import { Loading } from '../../components/resources/Loading';
import {
    Avatar,
    Button,
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
import { useNavigate } from 'react-router-dom';
import { ScheduleTable } from '../../components/scheduleTable';
import { Pagination } from '../../components/pagination';
import { useAuth } from '../../hooks/auth';

export const Schedule = () => {
    const { getSchedulesByParams, schedules, loading } = useSchedule();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const navigate = useNavigate();
    const { professional } = useAuth();

    useEffect(() => {
        if (!professional) return;
        console.log('professional', professional);
        getSchedulesByParams({
            professionalId: professional.id,
            finished: false,
        });
    }, [professional]);

    const handlePageChange = (page: any) => {
        //TODO - implementar paginação
        // getByParams({ page });
    };

    const handlePaginationChange = (value: number) => {
        //TODO - implementar paginação
        // setItemsPerPage(value);
        // getByParams({ page: 1, pageSize: value });
    };

    const TABLE_HEAD = [
        'Paciente',
        'Dia',
        'Horário',
        'Pet',
        'Raça',
        'Espécie',
        'Sexo',
        'Peso',
        'Ações',
    ];

    return (
        <>
            <Template>
                <div className="bg-white shadow h-screen">
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
                        {!loading && schedules.length > 0 && (
                            <>
                                <ScheduleTable
                                    schedules={schedules}
                                    tableHead={TABLE_HEAD}
                                    key={1}
                                />
                                <Pagination
                                    page={1}
                                    total={schedules.length}
                                    pageSize={itemsPerPage}
                                    onChange={(page) => {
                                        handlePageChange(page);
                                    }}
                                />
                            </>
                        )}
                        {!loading && schedules.length === 0 && (
                            <div
                                className="
                              flex 
                              items-center 
                              justify-center 
                              h-full
                              flex-col
                              mt-16
                              "
                            >
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    Nenhum agendamento encontrado
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </Template>
        </>
    );
};

// <div>
// <List>
//     {schedules.map((schedule) => {
//         return (
//             <ListItem
//                 onClick={() => {
//                     navigate(
//                         '/agendamento/info',
//                         { state: schedule },
//                     );
//                 }}
//             >
//                 <div>
//                     <div className="flex flex-row">
//                         <Typography
//                             variant="h6"
//                             color="black"
//                             className="mr-2"
//                         >
//                             Paciente:
//                         </Typography>
//                         <Typography>
//                             {
//                                 schedule.client
//                                     .name
//                             }
//                         </Typography>
//                     </div>
//                     <div className="flex flex-row">
//                         <Typography
//                             variant="h6"
//                             color="black"
//                             className="mr-2"
//                         >
//                             Data:
//                         </Typography>
//                         <Typography>
//                             {formatDate(
//                                 schedule.day.substring(
//                                     0,
//                                     10,
//                                 ),
//                             )}
//                         </Typography>
//                     </div>
//                     <div className="flex flex-row">
//                         <Typography
//                             variant="h6"
//                             color="black"
//                             className="mr-2"
//                         >
//                             Horário:
//                         </Typography>
//                         <Typography>
//                             {schedule.day.substring(
//                                 11,
//                                 16,
//                             )}
//                             h
//                         </Typography>
//                     </div>
//                     {/* {CARD PET INFO} */}
//                     <div className="flex flex-row">
//                         <Typography
//                             variant="h6"
//                             color="black"
//                             className="mr-2"
//                         >
//                             Pet:
//                         </Typography>
//                         <Typography>
//                             {schedule.pet.name}
//                         </Typography>
//                     </div>
//                 </div>
//             </ListItem>
//         );
//     })}
// </List>
// </div>
