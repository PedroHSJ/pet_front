import { ReactNode } from 'react';
import { Section } from '../Section';
import { Container, Content } from './styles';
import { Header } from '../Header';

interface IPageLayoutProps {
    children: ReactNode;
}

export const Template = ({ children }: IPageLayoutProps) => {
    return (
        <Container>
            <Header />
            <Section>{children}</Section>
        </Container>
    );
};
