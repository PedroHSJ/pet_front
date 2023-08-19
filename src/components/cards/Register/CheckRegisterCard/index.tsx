import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../../forms/Form';
import { Button } from '../../../buttons/Button';
import { useComponent } from '../../../../hooks/useComponent';
import { IChoseRole } from '../../../../interfaces/IRegisterForm';
import LogoPrimary from '../../../../assets/images/pet_logo.png';
import { Container, Title, LogoImage } from './styles';

import {
    requiredFieldsText,
    warningText,
} from '../../../../constants/messages';
import { Role } from '../../../../interfaces/IRole';
import { choseRoleSchema } from '../../../../validations/choseRoleSchema';
import { SelectComponent } from '../../../forms/NewSelectInput';
import { roleOptions } from '../../../../utils/options';

const CheckRegisterCard = () => {
    const navigate = useNavigate();
    const { dialog } = useComponent();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IChoseRole>({
        resolver: yupResolver(choseRoleSchema),
    });

    const onSubmit = async (data: IChoseRole) => {
        navigate('/createAccount', { state: data });
        // loginWithPassword(data);
    };

    useEffect(() => {
        if (!Object.keys(errors).length) return;
        dialog(warningText, requiredFieldsText);
    }, [errors]);

    return (
        <Container>
            <LogoImage src={LogoPrimary} alt="Logo" />
            <Title>
                Escolha o tipo de usuário que deseja cadastrar na plataforma
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <SelectComponent
                    label="Tipo de usuário"
                    name="role"
                    control={control}
                    options={roleOptions}
                />

                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
};

export default CheckRegisterCard;
