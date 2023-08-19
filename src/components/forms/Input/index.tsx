import { InputHTMLAttributes, useRef, useState } from 'react';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
    useForm,
} from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
    Container,
    Label,
    InputWrapper,
    TextInput,
    TextError,
    EyeButton,
} from './styles';
import { useTheme } from 'styled-components';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    control?: Control<FieldValue<FieldValues>>;
    editable?: boolean;
    placeholder?: string;
    disabled?: boolean;
    type: string;
    error?: string;
}

export const Input = ({
    name,
    label,
    control,
    editable,
    placeholder,
    disabled,
    type,
    error,
    ...rest
}: IInputProps) => {
    const [viewPass, setViewPass] = useState(true);
    const { colors } = useTheme();
    const form = useForm();
    const { field } = useController({
        name,
        control: control || form.control,
        defaultValue: '',
    });
    const inputRef = useRef<any>(null);

    const handleChangeValue = (value: string) => {
        field.onChange(value);
    };

    return (
        <Container hasError={!!error}>
            <Label>{label}</Label>
            <InputWrapper>
                <TextInput
                    ref={inputRef}
                    onChange={(e) => handleChangeValue(e.target.value)}
                    value={field.value}
                    disabled={disabled}
                    type={viewPass ? type : 'text'}
                    placeholder={placeholder}
                    {...rest}
                />
                {type == 'password' && (
                    <EyeButton
                        type="button"
                        onClick={() => setViewPass((old) => !old)}
                    >
                        {viewPass ? (
                            <AiFillEyeInvisible
                                size={20}
                                color={colors.secondary}
                            />
                        ) : (
                            <AiFillEye size={20} color={colors.secondary} />
                        )}
                    </EyeButton>
                )}
            </InputWrapper>
            <TextError>{error}</TextError>
        </Container>
    );
};

export default Input;
