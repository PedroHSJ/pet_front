import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react';
import { useEffect } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';

interface IRadioButtonsArrayProps {
    title: string;
    options: string[];
    name: string;
    control: Control<FieldValue<FieldValues>>;
}
interface IRadioButtonsProps {
    title: string;
    options: string[];
    name: string;
    control: Control<FieldValue<FieldValues>>;
    handleClick?: (value: string) => void;
}

export function RadioHorizontalList({
    title,
    options,
    name,
    control,
}: IRadioButtonsArrayProps) {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = (value: string) => {
        field.onChange(value);
    };

    return (
        <Card className="bg-white shadow-none w-full justify-between flex-col items-center p-2 mb-3">
            <div className="flex flex-col w-full">
                <div className="flex-start">
                    <Typography
                        key={title}
                        variant="small"
                        className="text-primary uppercase font-bold"
                    >
                        {title}
                    </Typography>
                </div>

                <div className="flex flex-row flex-wrap">
                    {options.map((option) => {
                        return (
                            <Radio
                                key={option}
                                name={name}
                                value={option}
                                label={
                                    <Typography
                                        variant="small"
                                        className="text-black m-0"
                                    >
                                        {option}
                                    </Typography>
                                }
                                onClick={handleChangeValue}
                            />
                        );
                    })}
                </div>
            </div>
        </Card>
    );
}
