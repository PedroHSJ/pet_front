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

export const TreatmentRecord = () => {
    const [options, setOptions] = useState(['SIM', 'NÃO']);
    const [mainComplaint, setMainComplaint] = useState('');

    const { control, handleSubmit } = useForm({});

    const onSubmit = (data: any) => {
        console.log(data);
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
                            key={1}
                            control={control}
                            name="previousDiseases"
                            options={options}
                            title="Doenças pregressas"
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Digestório"
                            options={Object.keys(DigestiveSystem).map(
                                (key) => DigestiveSystem[key as any],
                            )}
                            name="digestiveSystem"
                            key={2}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Urinário"
                            options={Object.keys(UrogenitalSystem).map(
                                (key) => UrogenitalSystem[key as any],
                            )}
                            name="urogenitalSystem"
                            key={3}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Cardiorrespiratório"
                            options={Object.keys(CardioRespiratorySystem).map(
                                (key) => CardioRespiratorySystem[key as any],
                            )}
                            name="cardioRespiratorySystem"
                            key={4}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Sistema Locomotor"
                            options={Object.keys(LocomotorSystem).map(
                                (key) => LocomotorSystem[key as any],
                            )}
                            name="locomotorSystem"
                            key={5}
                        />

                        <RadioHorizontalList
                            control={control}
                            title="Sistema Nervoso"
                            options={Object.keys(NeurologicalSystem).map(
                                (key) => NeurologicalSystem[key as any],
                            )}
                            name="neurologicalSystem"
                            key={6}
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
                            name="naturalFood"
                            key={7}
                        />
                        <RadioHorizontalList
                            control={control}
                            title="Porção"
                            options={Object.keys(Portion).map(
                                (key) => Portion[key as any],
                            )}
                            name="portion"
                            key={8}
                        />
                    </div>
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
