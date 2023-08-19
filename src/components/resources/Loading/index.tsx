import { useTheme } from 'styled-components';
import { Container } from './styles';
import { Spinner } from '@material-tailwind/react';

interface ILoadingProps {
    color?: string;
    size: number;
}

export const Loading = (): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Container>
            <Spinner />
        </Container>
    );
};
