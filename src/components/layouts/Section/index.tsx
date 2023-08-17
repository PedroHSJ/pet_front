import { ReactNode } from 'react';
import { Container } from './styles';

interface ISectionProps {
    children: ReactNode;
}

export const Section = ({ children }: ISectionProps): JSX.Element => {
    return <Container>{children}</Container>;
};
