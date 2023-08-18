import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AiFillCaretDown, AiFillCloseCircle } from 'react-icons/ai';
import {
    Control,
    FieldValue,
    FieldValues,
    useController,
} from 'react-hook-form';
import {
    Container,
    RemoveValueButton,
    Placeholder,
    Label,
    SelectedValue,
    ButtonSelect,
    ModalWithValues,
    ModalWithValuesContent,
    ModalTitle,
    ModalDescription,
    ItemOption,
    LabelOption,
    TextError,
} from './styles';
import { IPicker } from '../../../interfaces/IPicker';

interface ISelectInputProps {
    label: string;
    name: string;
    control: Control<FieldValue<FieldValues>>;
    options: IPicker[];
    error?: string;
    disabled?: boolean;
}

export const SelectInput = ({
    label,
    name,
    control,
    options,
    error,
    disabled,
}: ISelectInputProps): JSX.Element => {
    const [isVisibleOptions, setIsVisibleOptions] = useState(false);
    const { colors } = useTheme();
    const [selectText, setSelectText] = useState('');
    const { field, fieldState, formState } = useController({ name, control });

    useEffect(() => {
        options.map((picker) => {
            if (picker.key == field.value) {
                setSelectText(picker.label);
            }
        });
    }, [field.value, fieldState]);

    const handleSelect = ({ key, label }: IPicker) => {
        setIsVisibleOptions(false);
        setSelectText(label);
        //field.onChange(label);
        //return label;
        field.onChange(key);
        return key.toString;
    };

    const handleReset = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.stopPropagation();
        setSelectText('');
        field.onChange(undefined);
        return undefined;
    };

    useEffect(() => {
        if (!options || !field.value) return;
        options.map((picker) => {
            if (picker.label == field.value) setSelectText(picker.label);
        });
    }, [field]);

    return (
        <Container>
            <Label>{label}</Label>
            <ButtonSelect
                type="button"
                onClick={() => (disabled ? null : setIsVisibleOptions(true))}
            >
                {field.value == undefined || selectText == '' ? (
                    <Placeholder>Selecione...</Placeholder>
                ) : (
                    <RemoveValueButton
                        onClick={(e: any) => (disabled ? null : handleReset(e))}
                    >
                        <SelectedValue>{selectText}</SelectedValue>
                        <AiFillCloseCircle size={15} color={colors?.dark} />
                    </RemoveValueButton>
                )}
                <AiFillCaretDown color={colors?.primary} />
            </ButtonSelect>
            <TextError>{error}</TextError>
            {isVisibleOptions && (
                <ModalWithValues onClick={() => setIsVisibleOptions(false)}>
                    <ModalWithValuesContent
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ModalTitle>{label}</ModalTitle>
                        <ModalDescription>
                            Selecione um valor dentre os listados abaixo ou
                            clique fora para cancelar a seleção.
                        </ModalDescription>
                        {options.map((option) => {
                            return (
                                <ItemOption
                                    type="button"
                                    key={option.key}
                                    onClick={() => handleSelect(option)}
                                >
                                    <LabelOption>{option.label}</LabelOption>
                                </ItemOption>
                            );
                        })}
                    </ModalWithValuesContent>
                </ModalWithValues>
            )}
        </Container>
    );
};
