import { Switch, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
} from 'react-hook-form';

interface SwitchProps {
    control: Control<FieldValue<FieldValues>>;
    error?: string;
    showLabel: boolean;
    name: string;
}

export const SwitchComponent = ({
    control,
    name,
    error,
    showLabel,
}: SwitchProps) => {
    const { field, fieldState, formState } = useController({ name, control });

    const handleSwitch = (event: any) => {
        field.onChange(event.target.checked);
    };

    useEffect(() => {
        field.onChange(true);
    }, []);

    return (
        <div className="mb-3">
            <Typography
                color="gray"
                style={{ fontSize: '14px', fontWeight: 'bold' }}
            >
                {showLabel ? (field.value ? 'Ativo' : 'Inativo') : ''}
            </Typography>
            <Switch
                color="green"
                onChange={(event: any) => handleSwitch(event)}
                checked={field.value}
                crossOrigin={undefined}
            />
        </div>
    );
};
