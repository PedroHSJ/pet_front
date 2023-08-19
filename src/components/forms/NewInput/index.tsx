import { InputHTMLAttributes, useRef, useState } from 'react';
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
}

export const InputComponent = ({
    name,
    label,
    control,
    disabled,
    type,
    error,
    variant,
}: IInputProps) => {
    const [viewPass, setViewPass] = useState(true);
    const [changePassType, setChangePassType] = useState(type);
    const { colors } = useTheme();
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
        <div className="w-full my-2">
            {type === 'password' ? (
                <>
                    <Input
                        variant={variant}
                        onChange={(e) => handleChangeValue(e.target.value)}
                        size="md"
                        label={label}
                        disabled={disabled}
                        type={changePassType}
                        icon={
                            viewPass ? (
                                <EyeIcon
                                    onClick={() => {
                                        setViewPass(!viewPass);
                                        setChangePassType('text');
                                    }}
                                    className="cursor-pointer"
                                />
                            ) : (
                                <EyeSlashIcon
                                    onClick={() => {
                                        setViewPass(!viewPass);
                                        setChangePassType('password');
                                    }}
                                    className="cursor-pointer"
                                />
                            )
                        }
                        error={!!error}
                    />
                    <span className="text-sm text-error font-bold">
                        {error}
                    </span>
                </>
            ) : (
                <>
                    <Input
                        variant={variant}
                        onChange={(e) => handleChangeValue(e.target.value)}
                        size="md"
                        label={label}
                        disabled={disabled}
                        type={type}
                        error={!!error}
                    />
                    <span className="text-sm text-error font-bold">
                        {error}
                    </span>
                </>
            )}
        </div>
    );
};
