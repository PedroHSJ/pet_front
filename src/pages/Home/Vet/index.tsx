import { useEffect } from 'react';
import useSchedule from '../../../hooks/useSchedule';
import { Template } from '../../../components/layouts/Template';
import { useAuth } from '../../../hooks/auth';
import Chart from 'react-apexcharts';
import { Typography } from '@material-tailwind/react';
import { MainContainer } from '../../../components/MainContainer';
import { ContainerHeader } from '../../../components/containerHeader';

const HomeVet = () => {
    const { professional } = useAuth();
    const { getSchedulesByParams, schedules } = useSchedule();

    useEffect(() => {
        if (!professional) return;
        getSchedulesByParams({
            professionalId: professional?.id,
        });
    }, [professional]);

    const optionsClientsServed = {
        chart: {
            id: 'clients-served',
        },
        labels: ['Finalizados', 'Não finalizados'],
    };

    const seriesClientsServed = [
        schedules?.filter((schedule) => schedule.finished === true).length,
        schedules?.filter((schedule) => schedule.finished === false).length,
    ];

    return (
        <>
            <Template>
                <MainContainer>
                    <ContainerHeader title="Dashboard" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Typography variant="h5">
                            Quantidade de atendimento realizados
                        </Typography>

                        <Chart
                            type="pie"
                            width="100%"
                            height="350px"
                            options={optionsClientsServed}
                            series={seriesClientsServed}
                        />
                    </div>
                </MainContainer>
            </Template>
        </>
    );
};

export default HomeVet;
