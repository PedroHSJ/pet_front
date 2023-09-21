import { Button, Radio, Textarea, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { TitleTreatmentRecord } from '../Title';
import { SubTitleTreatmentRecord } from '../Subtitle';
import { RadioHorizontalList } from '../../forms/RadioButtons';
import { CardioRespiratorySystem } from '../../../enums/anamnese/cardiorespiratorySystem.enum';
import { DigestiveSystem } from '../../../enums/anamnese/digestiveSystem.enum';
import { LocomotorSystem } from '../../../enums/anamnese/locomotorSystem.enum';
import { NeurologicalSystem } from '../../../enums/anamnese/neurologicalSystem.enum';
import { UrogenitalSystem } from '../../../enums/anamnese/urogenitalSystem.enum';
import { Portion } from '../../../enums/foods/portion.enum';
import { NaturalFood } from '../../../enums/foods/naturalFood.enum';
import { Form } from '../../forms/Form';
import { useForm } from 'react-hook-form';
import { TextAreaComponent } from '../../forms/TextAreaComponent';
import { ITreatmentRecord } from '../../../interfaces/ITreatmentRecord';
import { Skin } from '../../../enums/anamnese/skin.enum';
import { Eyes } from '../../../enums/anamnese/eyes.enum';
import { Ears } from '../../../enums/anamnese/ears.enum';
import { Environment } from '../../../enums/anamnese/environment.enum';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISchedule } from '../../../interfaces/ISchedule';
import { MeasurementCondition } from '../../../enums/measurement/measurementCondition.enum';
import { InputComponent } from '../../forms/NewInput';

export const TreatmentRecord = () => {
    const location = useLocation();
    const schedule = location.state as ISchedule;
    const navigate = useNavigate();
    const [options, setOptions] = useState(['SIM', 'NÃO']);
    const [mainComplaint, setMainComplaint] = useState('');

    const { control, handleSubmit } = useForm({});

    const onSubmit = (data: ITreatmentRecord) => {
        const treatmentRecord = {
            ...data,
            scheduleId: schedule.id,
        };
        console.log(treatmentRecord);
    };

    return (
        <div className="bg-white flex flex-col p-4">
            <TitleTreatmentRecord>Ficha de atendimento</TitleTreatmentRecord>
            <div
                className="
            flex 
            flex-col 
            items-center 
            gap-4 
            flex-wrap 
            my-2 
            p-4
            rounded-lg
            bg-white
            shadow-lg
            "
            >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextAreaComponent
                        control={control}
                        label="Queixa principal"
                        name="mainComplaint"
                        disabled={false}
                    />
                    <div className="w-full">
                        <SubTitleTreatmentRecord>
                            Anamnese
                        </SubTitleTreatmentRecord>

                        <RadioHorizontalList
                            control={control}
                            title="Sistema Digestório"
                            options={Object.keys(DigestiveSystem).map(
                                (key) => DigestiveSystem[key as any],
                            )}
                            name="anamnesis.digestiveSystem"
                            key={2}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Urinário"
                            options={Object.keys(UrogenitalSystem).map(
                                (key) => UrogenitalSystem[key as any],
                            )}
                            name="anamnesis.urogenitalSystem"
                            key={3}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Cardiorrespiratório"
                            options={Object.keys(CardioRespiratorySystem).map(
                                (key) => CardioRespiratorySystem[key as any],
                            )}
                            name="anamnesis.cardioRespiratorySystem"
                            key={4}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Locomotor"
                            options={Object.keys(LocomotorSystem).map(
                                (key) => LocomotorSystem[key as any],
                            )}
                            name="anamnesis.locomotorSystem"
                            key={5}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Sistema Nervoso"
                            options={Object.keys(NeurologicalSystem).map(
                                (key) => NeurologicalSystem[key as any],
                            )}
                            name="anamnesis.neurologicSystem"
                            key={6}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Pele"
                            options={Object.keys(Skin).map(
                                (key) => Skin[key as any],
                            )}
                            name="anamnesis.skin"
                            key={7}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Olhos"
                            options={Object.keys(Eyes).map(
                                (key) => Eyes[key as any],
                            )}
                            name="anamnesis.eyes"
                            key={8}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Ouvidos"
                            options={Object.keys(Ears).map(
                                (key) => Ears[key as any],
                            )}
                            name="anamnesis.ears"
                            key={9}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Ambiente"
                            options={Object.keys(Environment).map(
                                (key) => Environment[key as any],
                            )}
                            name="anamnesis.environment"
                            key={10}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Hidratação"
                            options={Object.keys(MeasurementCondition).map(
                                (key) => MeasurementCondition[key as any],
                            )}
                            name="anamnesis.hydration"
                            key={11}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Mucosas"
                            options={Object.keys(MeasurementCondition).map(
                                (key) => MeasurementCondition[key as any],
                            )}
                            name="anamnesis.mucous"
                            key={12}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Cavidade Oral"
                            options={Object.keys(MeasurementCondition).map(
                                (key) => MeasurementCondition[key as any],
                            )}
                            name="anamnesis.oralCavity"
                            key={13}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Cavidade Nasal"
                            options={Object.keys(MeasurementCondition).map(
                                (key) => MeasurementCondition[key as any],
                            )}
                            name="anamnesis.nasalCavity"
                            key={14}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Linfonodos"
                            options={Object.keys(MeasurementCondition).map(
                                (key) => MeasurementCondition[key as any],
                            )}
                            name="anamnesis.lymphNodes"
                            key={15}
                        />
                    </div>

                    <div className="w-full">
                        <SubTitleTreatmentRecord>
                            Alimentação
                        </SubTitleTreatmentRecord>
                        <RadioHorizontalList
                            control={control}
                            title="Alimentação Natural"
                            options={Object.keys(NaturalFood).map(
                                (key) => NaturalFood[key as any],
                            )}
                            name="food.naturalFood"
                            key={7}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Porção"
                            options={Object.keys(Portion).map(
                                (key) => Portion[key as any],
                            )}
                            name="food.portion"
                            key={8}
                        />
                    </div>

                    <div className="w-full">
                        <SubTitleTreatmentRecord>
                            Sinais Vitais
                        </SubTitleTreatmentRecord>

                        <InputComponent
                            control={control}
                            label="Temperatura"
                            name="measurement.temperature"
                            type="number"
                            disabled={false}
                        />

                        <InputComponent
                            control={control}
                            label="Pressão Arterial"
                            name="measurement.bloodPressure"
                            type="text"
                            disabled={false}
                        />

                        <InputComponent
                            control={control}
                            label="Frequência Cardíaca"
                            name="measurement.heartRate"
                            type="number"
                            disabled={false}
                        />

                        <InputComponent
                            control={control}
                            label="Frequência Respiratória"
                            name="measurement.respiratoryRate"
                            type="number"
                            disabled={false}
                        />

                        <InputComponent
                            control={control}
                            label="Glicemia"
                            name="measurement.glycemia"
                            type="number"
                            disabled={false}
                        />
                    </div>

                    <TextAreaComponent
                        control={control}
                        label="Tratamento realizado"
                        name="treatmentPerformed"
                        disabled={false}
                    />

                    <Button
                        type="submit"
                        onClick={() => {
                            console.log('Finalizar atendimento');
                        }}
                        className="bg-primary"
                        size="sm"
                    >
                        Finalizar Atendimento
                    </Button>
                </Form>
            </div>
        </div>
    );
};
