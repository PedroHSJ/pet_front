import { useEffect, useState } from 'react';
import useSchedule from '../../../hooks/useSchedule';
import { Template } from '../../../components/layouts/Template';
import { useAuth } from '../../../hooks/auth';
import { Form } from '../../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../../components/forms/NewInput';
import { SelectComponent } from '../../../components/forms/NewSelectInput';
import { Filter } from '../../../components/filters/establishment';
import { useVerificationCode } from '../../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { Button, Input } from '@material-tailwind/react';
import { compare } from 'bcryptjs';
import { useBreed } from '../../../hooks/useBreed';
import { RadioHorizontalList } from '../../../components/forms/RadioButtons';
import Chart from 'react-apexcharts';
import { useProfessional } from '../../../hooks/useProfessional';
import { useEstablishment } from '../../../hooks/useEstablishment';
import { Typography } from '@material-tailwind/react';
import { MainContainer } from '../../../components/MainContainer';
import { ContainerHeader } from '../../../components/containerHeader';
import { useClient } from '../../../hooks/useClient';
import { useTreatmentRecord } from '../../../hooks/useTreatmentRecord';

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

    // const seriesClientsServed = [
    //     {
    //         name: 'João',
    //         data: [31],
    //     },
    //     {
    //         name: 'Maria',
    //         data: [40],
    //     },
    //     {
    //         name: 'José',
    //         data: [28],
    //     },
    //     {
    //         name: 'Pedro',
    //         data: [51],
    //     },
    //     {
    //         name: 'Ana',
    //         data: [25],
    //     },
    // ];

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
