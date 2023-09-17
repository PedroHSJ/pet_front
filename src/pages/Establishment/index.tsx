import { useEffect, useState } from 'react';
import { Template } from '../../components/layouts/Template';
import { useEstablishment } from '../../hooks/useEstablishment';
import { Loading } from '../../components/resources/Loading';
import { cnpjMask } from '../../utils/mask';
import { Pagination } from '../../components/pagination';
import EstablishmentImage from '../../assets/images/Establishment.png';

import {
    Avatar,
    Button,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
} from '@material-tailwind/react';
import { Filter } from '../../components/filters/establishment';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router';
import { MainContainer } from '../../components/MainContainer';
import { ContainerHeader } from '../../components/containerHeader';
import { AiOutlineShop } from 'react-icons/ai';

const Establishment = () => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const {
        error,
        loading,
        establishments,
        totalCount,
        getAllEstablishments,
        getEstablishmentByParams,
    } = useEstablishment();
    const { role } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        getEstablishmentByParams({
            params: {
                active: true,
            },
        });
    }, []);

    //PAGINAÇÃO
    const handlePageChange = (page: any) => {
        getEstablishmentByParams({ page, pageSize: itemsPerPage });
    };

    return (
        <Template>
            <MainContainer>
                <ContainerHeader title="Estabelecimentos">
                    <>
                        {role === 'ADMIN' && (
                            <Button
                                className="flex items-center gap-3 bg-primary my-2"
                                size="sm"
                                onClick={() => {
                                    navigate('/cadastrarEstabelecimento');
                                }}
                            >
                                <AiOutlineShop
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
                <List>
                    {establishments.map((estab) => {
                        return (
                            <ListItem key={estab.id} onClick={() => {}}>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="error"
                                        src={EstablishmentImage}
                                    />
                                </ListItemPrefix>

                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">
                                        {estab.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {cnpjMask(estab.cnpj)}
                                    </p>
                                </div>

                                <ListItemSuffix>
                                    {estab.active && (
                                        <span
                                            className="
                                                      inline-flex
                                                      items-center
                                                      px-2.5
                                                      py-0.5
                                                      rounded-full
                                                      text-xs
                                                      font-medium
                                                      bg-green-100
                                                      text-green-800
                                                      "
                                        >
                                            Ativo
                                        </span>
                                    )}

                                    {!estab.active && (
                                        <span
                                            className="
                                                         inline-flex
                                                         items-center
                                                         px-2.5
                                                         py-0.5
                                                         rounded-full
                                                         text-xs
                                                         font-medium
                                                         bg-red-100
                                                         text-red-800
                                                         "
                                        >
                                            Inativo
                                        </span>
                                    )}
                                </ListItemSuffix>
                            </ListItem>
                        );
                    })}
                </List>
                <Pagination
                    page={1}
                    total={totalCount}
                    pageSize={itemsPerPage}
                    onChange={(page) => {
                        handlePageChange(page);
                    }}
                />
            </MainContainer>
        </Template>
    );
};

export default Establishment;

//list backup
// <li
//     key={estab.id}
//     className="p-4 cursor-pointer hover:bg-gray-200 hover:rounded hover:shadow-lg hover:border-transparent hover:transform hover:scale-105 transition-all duration-200"
// >
//     <div className="flex space-x-3 ">
//         <div className="flex-1 space-y-1 justify-center ">
//             <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-medium text-gray-900">
//                     {estab.name}
//                 </h3>

//                 {estab.active && (
//                     <span
//                         className="
//                  inline-flex
//                  items-center
//                  px-2.5
//                  py-0.5
//                  rounded-full
//                  text-xs
//                  font-medium
//                  bg-green-100
//                  text-green-800
//                  "
//                     >
//                         Ativo
//                     </span>
//                 )}

//                 {!estab.active && (
//                     <span
//                         className="
//                     inline-flex
//                     items-center
//                     px-2.5
//                     py-0.5
//                     rounded-full
//                     text-xs
//                     font-medium
//                     bg-red-100
//                     text-red-800
//                     "
//                     >
//                         Inativo
//                     </span>
//                 )}
//             </div>
//             <p className="text-sm text-gray-500">
//                 {cnpjMask(estab.cnpj)}
//             </p>
//         </div>
//     </div>
// </li>
