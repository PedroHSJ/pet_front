import { useEffect, useState } from 'react';
import { Template } from '../../components/layouts/Template';
import { useProfessional } from '../../hooks/useProfessional';
import { Loading } from '../../components/resources/Loading';
import { Pagination } from '../../components/pagination';
import { IProfessional } from '../../interfaces/IProfessional';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router';
import {
    Avatar,
    List,
    ListItem,
    ListItemPrefix,
    Select,
    Typography,
} from '@material-tailwind/react';
import { formatPhoneNumber } from '../../utils/format';
import { Filter } from '../../components/filter';

const Professional = () => {
    const { error, loading, professionals, getAll, totalCount, 
            getByParams} = useProfessional();

    const [itemsPerPage, setItemsPerPage] = useState(10);

    const { role } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(professionals);
    // }, [professionals]);

    useEffect(() => {
        getAll();
    }, []);

    const handleFilter = (data: any) => {
        getByParams({ params: data });
    };

    const handleProfessionalClick = (row: IProfessional) => {
        console.log(row);
    };

    //PAGINAÇÃO
    const handlePageChange = (page: any) => {
        getByParams({ page});
    };

    const handlePaginationChange = (value: number) => {
        setItemsPerPage(value);
        getByParams({ page: 1, pageSize: value });
    }

    return (
        <Template>
            <div className="bg-white shadow">
                <div>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex-col">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Profissionais
                                </h1>
                                {role === 'ADMIN' && (
                                    <button
                                        type="button"
                                        className="bg-primary text-sm flex-end text-white rounded p-2"
                                        onClick={() => {
                                            navigate('/cadastrarProfissional');
                                        }}
                                    >
                                        Cadastrar
                                    </button>
                                )}
                            </div>
                            <Filter
                                options={{
                                    name: 'Nome',
                                    crmv: 'CRMV',
                                }}
                                onSubmit={(data) => {
                                    handleFilter(data);
                                }}
                            />
                        </div>
                        {loading && (
                            <div
                                className="
                              flex 
                              items-center 
                              justify-center 
                              h-screen
                              flex-col
                              "
                            >
                                <Loading />
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    Carregando...
                                </span>
                            </div>
                        )}
                        {/* {!loading && (
                            <ul
                                role="list"
                                className="divide-y divide-gray-500"
                            >
                                {professionals.map((professional) => {
                                    return (
                                        <li
                                            key={professional.id}
                                            className="p-4 cursor-pointer hover:bg-gray-200 hover:rounded hover:shadow-lg hover:border-transparent hover:transform hover:scale-105 transition-all duration-200"
                                            onClick={() =>
                                                handleProfessionalClick(
                                                    professional,
                                                )
                                            }
                                        >
                                            <div className="flex space-x-3">
                                                <img
                                                    className="h-12 w-12 rounded-full"
                                                    src={
                                                        'https://avatars.githubusercontent.com/u/60005589?v=4'
                                                    }
                                                    alt=""
                                                />
                                                <div className="flex-1 space-y-1 justify-center">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900">
                                                            {professional.name}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {professional.email}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {professional.phone?.replace(
                                                            /(\d{2})(\d{5})(\d{4})/,
                                                            '($1) $2-$3',
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <p className="text-sm text-gray-500">
                                                        {professional.role.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        CRMV:{' '}
                                                        {professional.crmv}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )} */}

                        {!loading && (
                            <List>
                                {professionals.map((professional) => {
                                    return (
                                        <ListItem
                                            key={professional.id}
                                            onClick={() =>
                                                handleProfessionalClick(
                                                    professional,
                                                )
                                            }
                                        >
                                            <ListItemPrefix>
                                                <Avatar
                                                    variant="circular"
                                                    alt="candice"
                                                    src="https://avatars.githubusercontent.com/u/60005589?v=4"
                                                />
                                            </ListItemPrefix>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                >
                                                    {professional.name}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="font-normal"
                                                >
                                                    {professional.email}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="font-normal"
                                                >
                                                    {formatPhoneNumber(
                                                        professional.phone,
                                                    )}
                                                </Typography>
                                            </div>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                        <span className="text-lg font-semibold text-primary">Total {totalCount ? totalCount : 'ERRO'}</span>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => handlePaginationChange(Number(e.target.value))}
                            className="bg-white border-2 border-primary focus:border-primary_hover rounded-md shadow-md px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                        <Pagination
                            page={1}
                            total={totalCount}
                            pageSize={itemsPerPage}
                            onChange={(page) => {
                                handlePageChange(page);
                            }}
                        />
                    </div>
                    
                </div>
            </div>
        </Template>
    );
};

export default Professional;
