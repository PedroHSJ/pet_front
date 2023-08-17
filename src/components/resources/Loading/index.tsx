import { useTheme } from 'styled-components';
import { Container, Spinner } from './styles';

interface ILoadingProps {
    color?: string;
    size: number;
}

export const Loading = ({ color, size }: ILoadingProps): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Container>
            <Spinner color={color ? color : colors.primary} size={size} />
        </Container>
    );
};
