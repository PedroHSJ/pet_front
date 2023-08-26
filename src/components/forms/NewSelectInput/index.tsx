import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Input, Select, Option } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon, HeartIcon } from '@heroicons/react/24/solid';
import { IOptions } from '../../../interfaces/IOptions';

type variant = 'standard' | 'outlined' | 'static';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    control: Control<FieldValue<FieldValues>>;
    disabled?: boolean;
    options: IOptions[];
    defaultValueComponent?: IOptions;
    onValueChange?: (value: string) => void;
}

export const SelectComponent = ({
    name,
    label,
    control,
    disabled,
    options,
    defaultValueComponent,
    onValueChange,
}: IInputProps) => {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = (value: string) => {
        field.onChange(value);
        if (!onValueChange) return;
        onValueChange(value);
    };

    // useEffect(() => {
    //     options.map((picker) => {
    //         if (picker.key == field.value) {
    //             setSelectText(picker.label);
    //         }
    //     });
    // }, [field.value, fieldState]);

    useEffect(() => {
        if (defaultValueComponent) {
            field.onChange(defaultValueComponent.value);
        }
        return;
    }, [defaultValueComponent]);

    return (
        <div className="w-full my-2">
            <Select
                defaultValue={defaultValueComponent?.value}
                label={label}
                disabled={disabled}
                onChange={handleChangeValue}
                value={field.value}
            >
                {options?.map((option) => (
                    <Option value={option.value}>{option.label}</Option>
                ))}
            </Select>
        </div>
    );
};
