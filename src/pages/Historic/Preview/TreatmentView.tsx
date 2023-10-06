import { useEffect, useState } from 'react';
import { TitleTreatmentRecord } from '../../../components/medicalCare/Title';
import { useLocation } from 'react-router-dom';
import { ISchedule } from '../../../interfaces/ISchedule';
import { useTreatmentRecord } from '../../../hooks/useTreatmentRecord';
import { SubTitleTreatmentRecord } from '../../../components/medicalCare/Subtitle';
import { ITreatmentRecord } from '../../../interfaces/ITreatmentRecord';

export const TreatmentView = () => {
    const location = useLocation();
    const schedule = location.state as ISchedule;
    const { getTreatmentsByParams, error, loading, treatmentRecordList } =
        useTreatmentRecord();

    const [treatmentRecord, setTreatmentRecord] = useState<
        ITreatmentRecord | undefined
    >();

    useEffect(() => {
        getTreatmentsByParams({
            page: 1,
            pageSize: 10,
            params: { scheduleId: schedule.id },
        });
    }, [schedule]);

    useEffect(() => {
        if (treatmentRecordList === undefined) return;
        if (treatmentRecordList.length === 0) return;

        const treatmentRecord = treatmentRecordList[0];

        setTreatmentRecord(treatmentRecord);
    }, [treatmentRecordList]);

    return (
        <div className="bg-white flex flex-col p-4">
            <TitleTreatmentRecord>Ficha de atendimento</TitleTreatmentRecord>
            <div className="flex flex-col items-center gap-4 flex-wrap my-2 p-4 rounded-lg bg-white shadow-lg w-full">
                <div className="w-full">
                    <SubTitleTreatmentRecord>
                        Queixa principal
                    </SubTitleTreatmentRecord>
                    <div className="pl-2">
                        <span className="">
                            {treatmentRecord?.mainComplaint}
                        </span>
                    </div>
                </div>

                <div className="flex flex-row w-full gap-10">
                    <div className="w-2/6">
                        <SubTitleTreatmentRecord>
                            Anamnese
                        </SubTitleTreatmentRecord>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Sistema Digestório: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .digestiveSystem
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Sistema Urinário: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .urogenitalSystem
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>
                                            Sistema Cardiorrespiratório:{' '}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .cardiorespiratorySystem
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Sistema Locomotor: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .locomotorSystem
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Sistema Nervoso: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .neurologicSystem
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Pele: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {treatmentRecord?.anamnesis.skin}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Olhos: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {treatmentRecord?.anamnesis.eyes}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Ouvidos: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {treatmentRecord?.anamnesis.ears}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Ambiente: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.anamnesis
                                                    .environment
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <SubTitleTreatmentRecord>
                            Alimentação
                        </SubTitleTreatmentRecord>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Alimentação Natural: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {treatmentRecord?.food.naturalFood}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Porção: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {treatmentRecord?.food.portion}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <SubTitleTreatmentRecord>
                            Sinais Vitais
                        </SubTitleTreatmentRecord>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Temperatura: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.measurement
                                                    .temperature
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Pressão Arterial: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.measurement
                                                    .bloodPressure
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Frequência Cardíaca: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.measurement
                                                    .heartRate
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Frequência Respiratória: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.measurement
                                                    .respiratoryRate
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between pl-2 w-full">
                                    <div>
                                        <span>Glicemia: </span>
                                    </div>
                                    <div>
                                        <span className="inline-block bg-primary_light text-white px-2 py-1 rounded-lg font-bold">
                                            {
                                                treatmentRecord?.measurement
                                                    .glycemia
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <SubTitleTreatmentRecord>
                        Tratamento realizado
                    </SubTitleTreatmentRecord>
                    <div className="pl-2">
                        <span className="">
                            {treatmentRecord?.treatmentPerformed}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
