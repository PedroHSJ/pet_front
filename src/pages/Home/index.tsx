import { useEffect, useState } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { Form } from '../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../components/forms/NewInput';
import { SelectComponent } from '../../components/forms/NewSelectInput';
import { Filter } from '../../components/filter';
import { useVerificationCode } from '../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { Button, Input } from '@material-tailwind/react';
import { compare } from 'bcryptjs';
const Home = () => {
    const { getVerificationCode, verificationCode, error, loading } =
        useVerificationCode();
    const [text, setText] = useState('');
    const [textCompared, setTextCompared] = useState<boolean>();

    useEffect(() => {
        console.log(verificationCode);
    }, [verificationCode]);

    useEffect(() => {
        if (!error) return;
        toast.error(error);
    }, [error]);

    useEffect(() => {
        console.log(text);
        (async () => {
            const textCompared = await compare(text, verificationCode);
            setTextCompared(textCompared);
            console.log(textCompared);
        })();
    }, [text]);

    return (
        <>
            <Template>
                <>
                    <header className="bg-white shadow my-8">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Dashboard
                            </h1>
                            {loading && <p>Carregando...</p>}
                            {!loading && verificationCode && (
                                <>
                                    <p>{verificationCode}</p>
                                    <p>{text}</p>
                                    <p>{textCompared}</p>
                                </>
                            )}
                        </div>
                        <Button
                            color="blue"
                            size="md"
                            onClick={() =>
                                getVerificationCode(
                                    'pedrohenriquesj.pro@gmail.com',
                                )
                            }
                        >
                            Enviar código
                        </Button>

                        <Input
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            type="text"
                        />
                    </header>
                </>
            </Template>
        </>
    );
};

export default Home;
