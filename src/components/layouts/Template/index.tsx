import { ReactNode, useEffect, useState } from 'react';
import { Section } from '../Section';
import { Container, Content } from './styles';
import { Header } from '../Header';

interface IPageLayoutProps {
    children: ReactNode;
}

export const Template = ({ children }: IPageLayoutProps) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize]);
    return (
        <Container flexDirection={screenSize.width < 520 ? 'column' : 'row'}>
            <Header />
            <Section>{children}</Section>
        </Container>
    );
};
