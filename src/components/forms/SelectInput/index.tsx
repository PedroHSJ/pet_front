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
    SelectWrapper,
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
import { Loading } from '../../resources/Loading';

interface ISelectInputProps {
    label: string;
    name: string;
    control: Control<FieldValue<FieldValues>>;
    options?: IPicker[];
    error?: string;
    loading?: boolean;
}

export const SelectInput = ({
    label,
    name,
    control,
    options,
    error,
    loading,
}: ISelectInputProps): JSX.Element => {
    const [isVisibleOptions, setIsVisibleOptions] = useState(false);
    const { colors } = useTheme();
    const [selectText, setSelectText] = useState('');
    const { field } = useController({ name, control });

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
        //alterado o if de !options || !field.value para
        if (!options || field.value == null || field.value == undefined) return;
        options.map((picker) => {
            if (picker.key == field.value) setSelectText(picker.label);
        });
    }, [field]);

    return (
        <Container>
            <SelectWrapper>
                <Label>{label}</Label>
                <ButtonSelect
                    disabled={loading}
                    type="button"
                    onClick={() => setIsVisibleOptions(true)}
                >
                    {field.value == undefined || selectText == '' ? (
                        <Placeholder>Selecione...</Placeholder>
                    ) : (
                        <RemoveValueButton onClick={(e: any) => handleReset(e)}>
                            <SelectedValue>{selectText}</SelectedValue>
                            <AiFillCloseCircle size={15} color={colors?.dark} />
                        </RemoveValueButton>
                    )}
                    {loading ? (
                        <Loading color={colors.primary} size={20} />
                    ) : (
                        <AiFillCaretDown color={colors?.primary} />
                    )}
                </ButtonSelect>
            </SelectWrapper>
            <TextError>{error}</TextError>
            {isVisibleOptions && (
                <ModalWithValues onClick={() => setIsVisibleOptions(false)}>
                    <ModalWithValuesContent
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ModalTitle>{label}</ModalTitle>
                        <ModalDescription>
                            {!options?.length
                                ? 'Nenhuma opção disponível.'
                                : 'Selecione um valor dentre os listados abaixo ou clique fora para cancelar a seleção.'}
                        </ModalDescription>
                        {options?.map((option) => {
                            return (
                                <ItemOption
                                    type="button"
                                    key={String(option.key)}
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
