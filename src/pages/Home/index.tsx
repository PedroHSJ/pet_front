import { useEffect, useState } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { Form } from '../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../components/forms/NewInput';
import { SelectComponent } from '../../components/forms/NewSelectInput';
import { Filter } from '../../components/filters/establishment';
import { useVerificationCode } from '../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { Button, Input } from '@material-tailwind/react';
import { compare } from 'bcryptjs';
import { useBreed } from '../../hooks/useBreed';
import { RadioHorizontalList } from '../../components/forms/RadioButtons';
import Chart from 'react-apexcharts';
import { useProfessional } from '../../hooks/useProfessional';
import { useEstablishment } from '../../hooks/useEstablishment';
import { Typography } from '@material-tailwind/react';
import { MainContainer } from '../../components/MainContainer';
import { ContainerHeader } from '../../components/containerHeader';
import { useClient } from '../../hooks/useClient';
import { useTreatmentRecord } from '../../hooks/useTreatmentRecord';

const Home = () => {
    const {
        getAll,
        totalCount: totalCountProf,
        professionals,
    } = useProfessional();
    const { getAllEstablishments, totalCount: totalCountEstab } =
        useEstablishment();
    const { getAll: getAllClients, clients } = useClient();
    const { getTreatments, treatmentRecordList } = useTreatmentRecord();

    useEffect(() => {
        getAll();
        getAllEstablishments();
        getAllClients();
        getTreatments();
    }, []);

    useEffect(() => {
        if (!professionals) return;
        const array = professionals.map((prof) => {
            return {
                name: prof.name,
                data: [
                    treatmentRecordList?.filter(
                        (treat) => treat.schedule.professional.id === prof.id,
                    ).length,
                ],
            };
        });

        console.log(array);
    }, [professionals]);

    const optionsGeneral = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: [''],
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
    };

    const seriesGeneral = [
        {
            name: 'Profissionais',
            data: [totalCountProf],
        },
        {
            name: 'Estabelecimentos',
            data: [totalCountEstab],
        },
        {
            name: 'Clientes',
            data: [clients.length],
        },
    ];

    const optionsProfessionalGender = {
        chart: {
            id: 'basic-pie',
        },
        labels: ['Masculino', 'Feminino'],
        //CHOOSING COLORS
        colors: ['#247BA0', '#FF165D'],
    };

    const seriesProfessionalGender = [
        professionals.filter((prof) => prof.gender === 'MASCULINO').length,
        professionals.filter((prof) => prof.gender === 'FEMININO').length,
    ];

    const optionsProfessionalAttendance = {
        chart: {
            id: 'professional-attendance',
        },
        xaxis: {
            categories: [''],
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            },
        },
    };

    const seriesProfessionalAttendance = professionals.map((prof) => {
        return {
            name: prof.name,
            data: [
                treatmentRecordList?.filter(
                    (treat) => treat.schedule.professional.id === prof.id,
                ).length,
            ],
        };
    });

    return (
        <>
            <Template>
                <MainContainer>
                    <ContainerHeader title="Dashboard" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Typography variant="h5">
                            Quantidade de profissionais, estabelecimentos e
                            clientes cadastrados
                        </Typography>

                        <Chart
                            options={optionsGeneral}
                            series={seriesGeneral}
                            type="bar"
                            width="100%"
                            height="350px"
                        />

                        {/* QUANTIDADE DE PROFISSIONAIS POR SEXO */}
                        <Typography variant="h5">
                            Quantidade de profissionais por sexo
                        </Typography>

                        <Chart
                            type="pie"
                            width="100%"
                            height="350px"
                            options={optionsProfessionalGender}
                            series={seriesProfessionalGender}
                        />

                        <Typography variant="h5">
                            Quantidade de atendimentos por profissional
                        </Typography>

                        <Chart
                            type="bar"
                            width="100%"
                            height="350px"
                            options={optionsProfessionalAttendance}
                            series={seriesProfessionalAttendance}
                        />
                    </div>
                </MainContainer>
            </Template>
        </>
    );
};

export default Home;
