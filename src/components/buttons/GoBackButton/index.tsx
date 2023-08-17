import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Container, Label } from "./styles";
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const { colors } = useTheme();
    const navigation = useNavigate();
    return (
        <Container onClick={() => navigation(-1)}>
            <BsFillArrowLeftCircleFill size={38} color={colors.primary} />
            <Label>Voltar</Label>
        </Container>
    );
}

export default GoBackButton;