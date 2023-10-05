import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Template } from '../../components/layouts/Template';
import { Pagination } from '../../components/pagination';
import { Loading } from '../../components/resources/Loading';
import { ScheduleTable } from '../../components/scheduleTable';
import { useAuth } from '../../hooks/auth';
import useSchedule from '../../hooks/useSchedule';

export const Historic = () => {
    const { getSchedulesByParams, schedules, loading } = useSchedule();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const navigate = useNavigate();
    const { professional } = useAuth();

    useEffect(() => {
        if (!professional) return;
        getSchedulesByParams({
            professionalId: professional.id,
            finished: true,
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
                                    Histórico
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
                                    buttonActionName="Visualizar"
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
