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
import { IPicker } from '../../../interfaces/IPicker';

type variant = 'standard' | 'outlined' | 'static';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    control: Control<FieldValue<FieldValues>>;
    disabled?: boolean;
    options?: IPicker[];
    error?: string;
    loading?: boolean;
}

export const SelectComponent = ({
    name,
    label,
    control,
    disabled,
    options,
    error,
    loading,
}: IInputProps) => {
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });
    const [selectText, setSelectText] = useState('');

    const handleChangeValue = ({ key, label }: IPicker) => {
        field.onChange(key);
    };

    useEffect(() => {
        //alterado o if de !options || !field.value para
        if (!options || field.value == null || field.value == undefined) return;
        options.map((picker) => {
            if (picker.key == field.value) setSelectText(picker.label);
        });
    }, [field]);
    return (
        <div className="w-full my-2">
            <Select label={label} disabled={disabled} value={selectText}>
                {options?.map((option) => (
                    <Option
                        value={option.key}
                        onClick={() => handleChangeValue(option)}
                    >
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    );
};
