import { useEffect } from 'react';

interface IComponentTesteProps {
    name: boolean;
    phone: boolean;
}

export const ComponentTeste = (props: IComponentTesteProps) => {
    const propNames = Object.keys(props);

    useEffect(() => {
        console.log(propNames);
    }, [propNames]);

    return <></>;
};
