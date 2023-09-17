import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon, HeartIcon } from '@heroicons/react/24/solid';

type variant = 'standard' | 'outlined' | 'static';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    placeholder?: string;
    control: Control<FieldValue<FieldValues>>;
    disabled?: boolean;
    type: string;
    error?: string;
    variant?: variant;
    mask?:
        | 'phone'
        | 'cpf'
        | 'cnpj'
        | 'cep'
        | 'date'
        | 'time'
        | 'money'
        | 'crmv';
}

export const InputComponent = ({
    name,
    label,
    control,
    disabled,
    type,
    error,
    variant,
    placeholder,
    mask,
    ...rest
}: IInputProps) => {
    const [viewPass, setViewPass] = useState(false);
    const [changePassType, setChangePassType] = useState(type);
    const { colors } = useTheme();
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });

    const handleChangeValue = (value: string) => {
        field.onChange(handleChangeMask(value));
    };

    const handleChangeMask = (value: string) => {
        if (mask === 'phone') {
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{4})(\d)/, '$1-$2')
                .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                .replace(/(-\d{4})\d+?$/, '$1');
        }
        if (mask === 'cpf') {
            return value
                .replace(/\D/g, '')

                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        if (mask === 'cnpj') {
            return value

                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1/$2')
                .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
        }
        if (mask === 'cep') {
            return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
        }
        if (mask === 'date') {
            return value

                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1/$2')
                .replace(/(\d{2})(\d)/, '$1/$2');
        }
        if (mask === 'time') {
            return value

                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1:$2')
                .replace(/(\d{2})(\d)/, '$1:$2');
        }
        if (mask === 'money') {
            return value

                .replace(/\D/g, '')
                .replace(/(\d)(\d{2})$/, '$1,$2')
                .replace(/(?=(\d{3})+(\D))\B/g, '.');
        }
        if (mask === 'crmv') {
            //this field has only 5 digits
            return value.replace(/\D/g, '').substr(0, 5);
        }
        return value;
    };

    return (
        <div className="w-full my-2">
            {type === 'password' ? (
                <>
                    <Input
                        value={field.value}
                        variant={variant}
                        onChange={(e) => {
                            handleChangeValue(e.target.value);
                        }}
                        size="md"
                        label={label}
                        disabled={disabled}
                        type={changePassType}
                        icon={
                            viewPass ? (
                                <EyeIcon
                                    onClick={() => {
                                        setViewPass(!viewPass);
                                        setChangePassType('password');
                                    }}
                                    className="cursor-pointer"
                                />
                            ) : (
                                <EyeSlashIcon
                                    onClick={() => {
                                        setViewPass(!viewPass);
                                        setChangePassType('text');
                                    }}
                                    className="cursor-pointer"
                                />
                            )
                        }
                        {...rest}
                        error={!!error}
                    />
                    <span className="text-sm text-error font-bold">
                        {error}
                    </span>
                </>
            ) : (
                <>
                    <Input
                        value={field.value}
                        variant={variant}
                        onChange={(e) => {
                            handleChangeValue(e.target.value);
                        }}
                        size="md"
                        label={label}
                        disabled={disabled}
                        type={type}
                        error={!!error}
                        {...rest}
                    />
                    <span className="text-sm text-error font-bold">
                        {error}
                    </span>
                </>
            )}
        </div>
    );
};
