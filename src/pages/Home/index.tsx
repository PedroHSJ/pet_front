import { useEffect, useState } from 'react';
import useSchedule from '../../hooks/useSchedule';
import { Template } from '../../components/layouts/Template';
import { useAuth } from '../../hooks/auth';
import { Form } from '../../components/forms/Form';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../components/forms/NewInput';
import { SelectComponent } from '../../components/forms/NewSelectInput';
import { Filter } from '../../components/filters/establishment';
import { useVerificationCode } from '../../hooks/useVerificationCode';
import { toast } from 'react-toastify';
import { Button, Input } from '@material-tailwind/react';
import { compare } from 'bcryptjs';
import { useBreed } from '../../hooks/useBreed';
import { RadioHorizontalList } from '../../components/forms/RadioButtons';
const Home = () => {
    return (
        <>
            <Template>
                <>
                    <header className="bg-white shadow my-8">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                </>
            </Template>
        </>
    );
};

export default Home;
