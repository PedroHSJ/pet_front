import { Textarea } from '@material-tailwind/react';
import { TextareaHTMLAttributes, useEffect } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
    control: Control<FieldValue<FieldValues>>;
    disabled?: boolean;
    error?: string;
}

export const TextAreaComponent = ({
    name,
    label,
    control,
    disabled,
    error,
}: ITextAreaProps) => {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = (value: string) => {
        field.onChange(value);
    };

    useEffect(() => {
        if (!field.value) return;
        handleChangeValue(field.value);
    }, [field.value]);

    return (
        <>
            <Textarea
                size="lg"
                label={label}
                success={!!error ? false : true}
                error={!!error ? true : false}
                disabled={disabled}
                value={field.value}
                onChange={(e) => {
                    handleChangeValue(e.target.value);
                }}
            />
            <div className="text-red-600 text-sm mb-1">{error}</div>
        </>
    );
};
