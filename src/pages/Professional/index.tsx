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
    Button,
    List,
    ListItem,
    ListItemPrefix,
    Select,
    Typography,
} from '@material-tailwind/react';
import { formatPhoneNumber } from '../../utils/format';
import { Filter } from '../../components/filters/establishment';
import { FilterProfessional } from '../../components/filters/professional';
import { AiOutlineShop, AiOutlineUserAdd } from 'react-icons/ai';
import { MainContainer } from '../../components/MainContainer';
import { ContainerHeader } from '../../components/containerHeader';
import { getEstablishmentByParams } from '../../services/api/EstablishmentApi';

const Professional = () => {
    const { error, loading, professionals, getAll, totalCount, getByParams } =
        useProfessional();

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
        getByParams({ page });
    };

    const handlePaginationChange = (value: number) => {
        setItemsPerPage(value);
        getByParams({ page: 1, pageSize: value });
    };

    return (
        <Template>
            <MainContainer>
                <ContainerHeader title="Profissionais">
                    <>
                        {role === 'ADMIN' && (
                            <Button
                                className="flex items-center gap-3 h-full bg-primary my-2"
                                size="sm"
                                onClick={() => {
                                    navigate('/cadastrarProfissional');
                                }}
                            >
                                <AiOutlineUserAdd
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{' '}
                                Cadastrar
                            </Button>
                        )}
                    </>
                </ContainerHeader>
                <Filter
                    onSubmit={(data) => {
                        getEstablishmentByParams({ params: data });
                    }}
                />
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

                {!loading && (
                    <List>
                        {professionals.map((professional) => {
                            return (
                                <ListItem
                                    key={professional.id}
                                    onClick={() =>
                                        handleProfessionalClick(professional)
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

                <Pagination
                    page={1}
                    total={totalCount}
                    pageSize={itemsPerPage}
                    onChange={(page) => {
                        handlePageChange(page);
                    }}
                    onPaginationChange={(value) => {
                        handlePaginationChange(value);
                    }}
                />
            </MainContainer>
        </Template>
    );
};

export default Professional;
