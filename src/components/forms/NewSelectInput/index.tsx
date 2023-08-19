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

type variant = 'standard' | 'outlined' | 'static';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    control: Control<FieldValue<FieldValues>>;
    disabled?: boolean;
    options: IOptions[];
}

interface IOptions {
    value: string;
    label: string;
}

export const SelectComponent = ({
    name,
    label,
    control,
    disabled,
    options,
}: IInputProps) => {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = (value: string) => {
        console.log(value);
        field.onChange(value);
    };

    // useEffect(() => {
    //     options.map((picker) => {
    //         if (picker.key == field.value) {
    //             setSelectText(picker.label);
    //         }
    //     });
    // }, [field.value, fieldState]);

    return (
        <div className="w-full my-2 ">
            <Select
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
