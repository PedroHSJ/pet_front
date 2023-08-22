import { useForm } from 'react-hook-form';
import Input from '../forms/OldInput';
import { Form } from '../forms/Form';
import { Button } from '../buttons/Button';
import { InputComponent } from '../forms/NewInput';
import { useEffect, useState } from 'react';

interface IFilterProps {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    onSubmit: (data: any) => void;
}

const Filter = ({ onSubmit, name, email, phone }: IFilterProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const [propsValues, setPropsValues] = useState({ name, email, phone });
    const [propsNames, setPropsNames] = useState(
        Object.keys({ name, email, phone }),
    );

    const propNames = Object.keys({ name, email, phone });

    useEffect(() => {
        propsNames.forEach((propName) => {
            if (propsValues[propName] === true) {
                console.log('entrou');
                setPropsNames(propsNames.filter((name) => name !== propName));
            }
        });
    }, [propsValues]);

    return (
        <div className="flex shadow rounded my-4">
            <div className=" flex-1 mx-auto  px-4 py-6 sm:px-6 lg:px-8 ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {propNames.map((propName) => {
                        return (
                            <InputComponent
                                key={propName}
                                control={control}
                                name={propName}
                                label={propName}
                                type="text"
                            />
                        );
                    })}

                    <Button style="primary" type="submit">
                        Buscar
                    </Button>
                </Form>
            </div>
        </div>
    );
};

Filter.defaultProps = {
    name: false,
    email: false,
    phone: false,
};

export { Filter };
